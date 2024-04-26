import React from 'react';
import bg_image from './assets/images/page-3-bg.jpg';
import p1Image from './assets/images/p1.jpg'; // Import images
import p2Image from './assets/images/p2.jpg';
import p3Image from './assets/images/p3.jpg';
import p4Image from './assets/images/p4.jpg';


function Page3() {

    return (
        <div id="page3">
            <div className="gradient-overlay"></div>
            <img src={bg_image} className="page-3-bg" alt="page-2-bg" />

            <div className="elem">
                <form>
                    <span className="page2Heading page_3_heading">DISEASED PLANTS</span>
                    <div className="diseased_plant_div">
                        <div className="disease_content">
                            <img src={p1Image} className="diseased_plant_images" alt="P1Image" />
                            <span className="disease_text">Early Blight </span>
                            <br />
                            <span className="disease_decription">
                                Blight, a fungal disease, led to the 1840s potato famine, causing one million deaths. It
                                spreads via windborne spores under warm, humid conditions, affecting potatoes and
                                tomatoes.
                            </span>
                        </div>

                        <div className="disease_content">
                            <img src={p2Image} className="diseased_plant_images" alt="P2Image" />
                            <span className="disease_text">Powdery Mildew </span>
                            <br />
                            <span className="disease_decription">
                                Powdery mildew, a fungal disease, manifests as white
                                powder on plants, thriving in low soil moisture and high humidity, favoring shady areas
                                over direct sun exposure.
                            </span>
                        </div>

                        <div className="disease_content">
                            <img src={p3Image} className="diseased_plant_images" alt="P3Image" />
                            <span className="disease_text">Downy Mildew</span>
                            <br />
                            <span className="disease_decription">
                                Powdery mildews show white powder on upper leaves; downy mildews produce grayish spores
                                on lower leaves, favoring cool, moist conditions.
                            </span>
                        </div>

                        <div className="disease_content">
                            <img src={p4Image} className="diseased_plant_images" alt="P4Image" />
                            <span className="disease_text">Canker Wound</span>
                            <br />
                            <span className="disease_decription">
                                Canker, often from fungal or bacterial infections, appears as sunken, swollen wounds on
                                woody plants, potentially lethal, girdling branches and killing foliage. Rodents can
                                spread pathogens.
                            </span>
                        </div>
                    </div>

                    <div className="mb-3">
                        {/* Use a simple anchor tag for navigation */}
                        <button className="button" href="#page4">
                            <a href="#page4" className=" button_text">Scan Crop</a>
                        </button>


                    </div>
                </form>
            </div>
        </div>
    );
}

export default Page3;
