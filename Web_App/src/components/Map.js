import React from 'react'

function Map() {
    return (
        <div className="map-overlay">
            <div className="map-contact">
                <iframe width="100%" height="100%" id="gmap_canvas" title="contact map" src="https://maps.google.com/maps?q=main%20street%2C%20city%2C%20state&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>

    );
}

export default Map;
