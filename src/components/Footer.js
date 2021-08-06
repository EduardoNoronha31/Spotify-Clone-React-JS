import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat"
import React from "react";
import { Grid, Slider } from "@material-ui/core";
import { PlaylistAdd, VolumeDown } from "@material-ui/icons";
import "./Style/Footer.css"






function Footer({ spotify }) {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumlogo"
                    src="https://lite-images-i.scdn.co/image/ab67616d00001e023faf680c98eed3f0a6ecb61d"
                />
                <div className="footer__songInfo">
                    <h4>Imunização Racional (Que Beleza)</h4>
                    <p>Tim Maia</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutline fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <PlaylistAdd className="footer__add" />
                <VolumeDown />
                <Slider className="footer__slider" />
            </div>
        </div>

    )

}


export default Footer;








