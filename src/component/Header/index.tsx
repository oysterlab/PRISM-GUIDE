import React from 'react'
import Zoom from './Zoom'

function Header() {
  return (
    <header>
      <div className="header-left">
        <ul className="tab">
          <li className="icon-artboards current" data-id="artboards"></li>
          <li className="icon-slices" data-id="slices"></li>
          <li className="icon-colors" data-id="colors"></li>
        </ul>
      </div>       
      <div className="header-center">
        <Zoom />
        <div className="flow-mode">
          <label htmlFor="flow-mode">FLOW</label>
          <div className="slidebox" title="Keyboard shortcut: f">
            <input id="flow-mode" type="checkbox" name="flow-mode"/>
            <label htmlFor="flow-mode"></label>
          </div>
        </div>
        <h1></h1>
        <div className="show-notes">
          <label htmlFor="show-notes">NOTES</label>
          <div className="slidebox" title="Keyboard shortcut: n">
            <input id="show-notes" type="checkbox" name="show-notes" checked/>
            <label htmlFor="show-notes"></label>
          </div>
        </div>
      </div>
      <div className="header-right">
        <div id="unit" className="unit-box" tabIndex={0}>
            <div className="overlay"></div>
            <h3>Unit switch</h3>
            <p>Web View - px</p>
            <ul>
              <li className="sub-title">Device switch</li>
              <li><label><input type="radio" name="resolution" data-name="Web View - px" data-unit="px" data-scale="1" checked/><span>Web View - px</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="iOS Devices - pt" data-unit="pt" data-scale="1" /><span>iOS Devices - pt</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="Android Devices - dp/sp" data-unit="dp/sp" data-scale="1"/><span>Android Devices - dp/sp</span></label></li>
              <li className="sub-title">Convert to pixels</li>
              <li><label><input type="radio" name="resolution" data-name="IOS Points @1x" data-unit="px" data-scale="1"/><span>IOS Points @1x</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="IOS Retina @2x" data-unit="px" data-scale="2"/><span>IOS Retina @2x</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="IOS Retina HD @3x" data-unit="px" data-scale="3"/><span>IOS Retina HD @3x</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="Android LDPI @0.75x" data-unit="px" data-scale="0.75"/><span>Android LDPI @0.75x</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="Android MDPI @1x" data-unit="px" data-scale="1"/><span>Android MDPI @1x</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="Android HDPI @1.5x" data-unit="px" data-scale="1.5"/><span>Android HDPI @1.5x</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="Android XHDPI @2x" data-unit="px" data-scale="2"/><span>Android XHDPI @2x</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="Android XXHDPI @3x" data-unit="px" data-scale="3"/><span>Android XXHDPI @3x</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="Android XXXHDPI @4x" data-unit="px" data-scale="4"/><span>Android XXXHDPI @4x</span></label></li>
              <li className="sub-title">Convert to others</li>
              <li><label><input type="radio" name="resolution" data-name="CSS Rem 8px" data-unit="rem" data-scale="0.125"/><span>CSS Rem 8px</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="CSS Rem 10px" data-unit="rem" data-scale="0.1"/><span>CSS Rem 10px</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="CSS Rem 12px" data-unit="rem" data-scale="0.08333333333333333"/><span>CSS Rem 12px</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="CSS Rem 14px" data-unit="rem" data-scale="0.07142857142857142"/><span>CSS Rem 14px</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="CSS Rem 16px" data-unit="rem" data-scale="0.0625"/><span>CSS Rem 16px</span></label></li>
              <li><label><input type="radio" name="resolution" data-name="Ubuntu Grid" data-unit="gu" data-scale="0.037037037037037035"/><span>Ubuntu Grid</span></label></li>
            </ul>
        </div>
      </div>        
    </header>    
  )
}

export default Header