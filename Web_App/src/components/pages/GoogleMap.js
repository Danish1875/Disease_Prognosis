import React, { useEffect } from 'react';
import { GoogleMap, Loader, Marker, InfoWindow } from "@googlemaps/js-api-loader"


const GoogleMaps = () => {
    useEffect(() => {
        const loadGoogleMaps = async () => {
            const loader = new Loader({
                apiKey: 'AIzaSyAhj2VjaWW980pxbqs2q3mNKI7tDBtRXW4',
                version: 'weekly',
                // ...additionalOptions
            });

            try {
                if (!window.google || !window.google.maps) {
                    await loader.load();
                }

                const { google } = window;
                const map = new google.maps.Map(document.getElementById('maps'), {
                    center: { lat: 0, lng: 0 },
                    zoom: 16,
                });

                // Get user's current location
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const { latitude, longitude } = position.coords;
                            const userLocation = new google.maps.LatLng(latitude, longitude);
                            map.setCenter(userLocation);

                            // Create marker for user's location
                            const userMarker = new google.maps.Marker({
                                position: userLocation,
                                map,
                                title: 'Here You Are',
                                animation: google.maps.Animation.DROP,
                                icon: {
                                    url: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                                },
                            });

                            const userInfowindow = new google.maps.InfoWindow({
                                content: 'My Location',
                            });

                            userMarker.addListener('click', () => {
                                userInfowindow.open(map, userMarker);
                            });

                            // Initialize Places service
                            const service = new google.maps.places.PlacesService(map);

                            // Use Places service to search for medical clinics and hospitals
                            service.nearbySearch(
                                {
                                    location: userLocation, // Update with user's current location
                                    radius: 5000, // Specify the radius in meters (e.g., 5000 = 5km)
                                    type: ['hospital'] // Specify the types of places to search
                                },
                                (results, status) => {
                                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                                        // Process the search results
                                        for (let i = 0; i < results.length; i++) {
                                            createMarker(results[i]);
                                        }
                                    }
                                }
                            );
                            // const doc = new google.maps.places.PlacesService(map);

                            // // Use Places service to search for medical clinics and hospitals
                            // doc.nearbySearch(
                            //     {
                            //         location: userLocation, // Update with user's current location
                            //         radius: 5000, // Specify the radius in meters (e.g., 5000 = 5km)
                            //         type: ['supermarket'] // Specify the types of places to search
                            //     },
                            //     (results, status) => {
                            //         if (status === google.maps.places.PlacesServiceStatus.OK) {
                            //             // Process the search results
                            //             for (let i = 0; i < results.length; i++) {
                            //                 createMarker(results[i]);
                            //             }
                            //         }
                            //     }
                            // );
                        },
                        (error) => {
                            console.error('Error getting user location:', error);
                        }
                    );
                } else {
                    console.error('Geolocation is not supported by this browser.');
                }

                const createMarker = (place) => {
                    const marker = new google.maps.Marker({
                        map,
                        position: place.geometry.location,
                    });

                    const Infowindow = new google.maps.InfoWindow({
                        content: place.name,
                    });

                    marker.addListener('click', () => {
                        Infowindow.open(map, marker);
                    });
                };
            } catch (error) {
                console.error('Error loading Google Maps:', error);
            }
        };

        // Load the Google Maps script
        if (window.google && window.google.maps) {
            loadGoogleMaps();
        } else {
            // Load the Google Maps API asynchronously
            window.initMap = loadGoogleMaps;
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAhj2VjaWW980pxbqs2q3mNKI7tDBtRXW4&libraries=places&callback=initMap`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    }, []);

    return <div id="maps" style={{ height: '51vh' }}></div>;
};

export default GoogleMaps;
