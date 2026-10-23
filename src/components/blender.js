import React, { Component } from "react";
import BlenderDemo from './demo_blender1';

export default class Blender extends Component {
  render() {
    return (
      <section id="blender">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Blender</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <h3 className="responsive-headline">
              <p>
                  <a href="/demo/gaussianblur/gaussian_blur.html">Webgl Texture filtering</a>: Some experiments I did
                  with WebGL. This demo is using a custom fragment shader to apply a gaussian filter with a varrying intensity based on the cube position.
                </p>
                <p>
                  This <a href="/demo/testfirepbr.mp4">video</a> experiments with
                  fire simulation and PBR material.
                </p>
                <p>
                  This <a href="/demo/animation.mp4">video</a> experiments with
                  animation and physics simulation.
                </p>
              
              <p>
              <BlenderDemo />
              </p>
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
