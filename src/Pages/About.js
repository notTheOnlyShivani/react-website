import React from 'react';
import indoorPlants from "../assets/aboutPage.jpg";
import "../styles/About.css"

function About() {
  return (
    <div className="about">
        <h1 className="title">ABOUT US</h1>
        <img src={indoorPlants} width="360px" />
        <div className='paragraph'>
        <p className="firstPara">Integer et fringilla velit, a tempus dui. Donec auctor dolor nec elit efficitur suscipit. Nunc blandit, justo a pulvinar mattis, turpis erat varius ligula, feugiat malesuada odio sem et ex. In non vestibulum lorem. Quisque ex felis, rutrum a tempor quis, lobortis quis lectus. Aliquam consectetur arcu et eleifend venenatis. Nulla at tincidunt neque. Sed venenatis enim est, at finibus urna pretium eget. Suspendisse ut arcu eu nibh laoreet ultricies. Curabitur facilisis, neque vitae molestie tempus, urna arcu finibus metus, vel tincidunt enim lorem ut tortor. Maecenas ante diam, ultrices a quam nec, dapibus bibendum sem. Donec mattis hendrerit est. Pellentesque vitae dolor enim. Aenean eros erat, rhoncus id ante sit amet, dignissim ornare odio. Sed cursus risus lobortis, lobortis eros ac, elementum nunc. Donec tristique massa eu nisl scelerisque ultrices.</p>
        <p className="secondPara">Mauris venenatis dignissim diam rutrum venenatis. Vivamus sodales mi eget ex hendrerit fermentum. Nullam leo ante, vehicula dapibus gravida eu, rutrum ac diam. Nunc euismod id felis et aliquam. Donec et dolor lorem. Curabitur consequat luctus tellus, placerat feugiat velit blandit ut. Suspendisse vestibulum ipsum semper urna consequat, pellentesque tempus turpis rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eros enim, vestibulum eu mattis ut, gravida ac leo. Praesent in porta lacus. Donec libero odio, feugiat eu varius sed, efficitur vitae ligula. Suspendisse eleifend cursus tellus in consectetur. Morbi dictum elementum scelerisque. Quisque interdum est a consequat malesuada. Duis ultrices rhoncus diam sollicitudin lobortis. Morbi ut orci fringilla, cursus orci tincidunt, auctor enim.</p>
        </div>
    </div>
  )
}

export default About