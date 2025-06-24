
import { useState } from "react";

import HeroBannerBiblio from "./HeroBannerBiblio/HeroBannerBiblio";
import BibliotecaTabs from "./TuBibliotecaTab/TuBibliotecaTab";



function TuBiblioteca() {


    return (
        <div className="tu-biblioteca">
            <HeroBannerBiblio/>
            <BibliotecaTabs />
        </div>
    );
    }

export default TuBiblioteca;