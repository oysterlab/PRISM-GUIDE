import React from 'react'

function Navbar() {
  return (
    <aside className="navbar on">
      <section id="artboards" style={{}}>
          <div className="pages-select" tabIndex={0}>
            <h3>All artboards <em>(2)</em></h3>
            <ul className="page-list">
                <li><label><input type="radio" name="page" defaultValue="all" defaultChecked /><span>All artboards <em>(2)</em></span></label></li>
                <li><label><input type="radio" name="page" defaultValue="1ADD9DD4-8A13-4993-B24A-564003D5336B" /><span>Page 1 <em>(2)</em></span></label></li>
            </ul>
          </div>
          <ul className="artboard-list">
            <li id="artboard-0" className="artboard active" data-page-id="1ADD9DD4-8A13-4993-B24A-564003D5336B" data-id="E8A663AD-8C01-464F-9D82-E123CC9EB414" data-index={0}>
                <picture className="preview-img" data-name="Main Screen"><img alt="Main Screen" src="preview/icons/page-1-1-main-screen.png?1645017822810" /></picture>
                <div>
                  <h3>Main Screen</h3>
                  <small>Page 1</small>
                </div>
            </li>
            <li id="artboard-1" className="artboard" data-page-id="1ADD9DD4-8A13-4993-B24A-564003D5336B" data-id="F7C1D360-2B75-4F4E-8F22-84DF646860FB" data-index={1}>
                <picture className="preview-img" data-name="Profile Android"><img alt="Profile Android" src="preview/icons/page-1-2-profile-android.png?1645017822810" /></picture>
                <div>
                  <h3>Profile Android</h3>
                  <small>Page 1</small>
                </div>
            </li>
          </ul>
      </section>
      <section id="slices" style={{display: 'none'}}>
      <ul className="asset-list">
          <li id="slice-5CCFE5F5-3451-4CF6-8916-38E866588CEA" className="slice-layer" data-objectid="5CCFE5F5-3451-4CF6-8916-38E866588CEA">
            <picture><img src="assets/Details.png" alt="" /></picture>
            <div>
                <h3>Details</h3>
                <small>420.51px × 100px</small>
            </div>
          </li>
          <li id="slice-7335F0EB-7F76-42DE-8C90-B437F799D51E" className="slice-layer" data-objectid="7335F0EB-7F76-42DE-8C90-B437F799D51E">
            <picture><img src="assets/Image.png" alt="" /></picture>
            <div>
                <h3>Image</h3>
                <small>436px × 490px</small>
            </div>
          </li>
          <li id="slice-3D89B587-AF88-45F5-B8BF-35C8907E799F" className="slice-layer" data-objectid="3D89B587-AF88-45F5-B8BF-35C8907E799F">
            <picture><img src="assets/Photographer.png" alt="" /></picture>
            <div>
                <h3>Photographer</h3>
                <small>436px × 53px</small>
            </div>
          </li>
          <li id="slice-B73CCC1C-8C0E-4AEF-B7F9-98ADDD2B2D41" className="slice-layer" data-objectid="B73CCC1C-8C0E-4AEF-B7F9-98ADDD2B2D41">
            <picture><img src="assets/Line.png" alt="" /></picture>
            <div>
                <h3>Line</h3>
                <small>436px × 1.5px</small>
            </div>
          </li>
          <li id="slice-08946AF0-9CD3-4BCC-9DC4-21CCDFA3CAE2" className="slice-layer" data-objectid="08946AF0-9CD3-4BCC-9DC4-21CCDFA3CAE2">
            <picture><img src="assets/Rectangle 3.png" alt="" /></picture>
            <div>
                <h3>Rectangle 3</h3>
                <small>436px × 112px</small>
            </div>
          </li>
          <li id="slice-7D167667-C7CA-462A-81F3-D06494A303BC" className="slice-layer" data-objectid="7D167667-C7CA-462A-81F3-D06494A303BC">
            <picture><img src="assets/Five.png" alt="" /></picture>
            <div>
                <h3>Five</h3>
                <small>55px × 85px</small>
            </div>
          </li>
          <li id="slice-F2642A16-893E-4959-9148-4FD57679EA4E" className="slice-layer" data-objectid="F2642A16-893E-4959-9148-4FD57679EA4E">
            <picture><img src="assets/Four.png" alt="" /></picture>
            <div>
                <h3>Four</h3>
                <small>72px × 88px</small>
            </div>
          </li>
          <li id="slice-27279D8A-B9CD-421C-AEDE-F256F457CF8E" className="slice-layer" data-objectid="27279D8A-B9CD-421C-AEDE-F256F457CF8E">
            <picture><img src="assets/Three.png" alt="" /></picture>
            <div>
                <h3>Three</h3>
                <small>69px × 85px</small>
            </div>
          </li>
          <li id="slice-FAC464F9-B9C0-47DF-A3D9-0F8B96BE24E1" className="slice-layer" data-objectid="FAC464F9-B9C0-47DF-A3D9-0F8B96BE24E1">
            <picture><img src="assets/Two.png" alt="" /></picture>
            <div>
                <h3>Two</h3>
                <small>68px × 85px</small>
            </div>
          </li>
          <li id="slice-A33D7FCF-335F-4B3B-923A-5C7AFF27715F" className="slice-layer" data-objectid="A33D7FCF-335F-4B3B-923A-5C7AFF27715F">
            <picture><img src="assets/Your Story.png" alt="" /></picture>
            <div>
                <h3>Your Story</h3>
                <small>55px × 14px</small>
            </div>
          </li>
          <li id="slice-F2E89DFD-0E95-473C-BEC4-FF2593DB0B7A" className="slice-layer" data-objectid="F2E89DFD-0E95-473C-BEC4-FF2593DB0B7A">
            <picture><img src="assets/Oval.png" alt="" /></picture>
            <div>
                <h3>Oval</h3>
                <small>60px × 60px</small>
            </div>
          </li>
          <li id="slice-133525CC-62B5-46DB-849F-B8BF3A095083" className="slice-layer" data-objectid="133525CC-62B5-46DB-849F-B8BF3A095083">
            <picture><img src="assets/Top Bar.png" alt="" /></picture>
            <div>
                <h3>Top Bar</h3>
                <small>436px × 60px</small>
            </div>
          </li>
          <li id="slice-D47BD2AB-2FC6-4334-8F76-888D33BC788D" className="slice-layer" data-objectid="D47BD2AB-2FC6-4334-8F76-888D33BC788D">
            <picture><img src="assets/Status.png" alt="" /></picture>
            <div>
                <h3>Status</h3>
                <small>436px × 29px</small>
            </div>
          </li>
          <li id="slice-CCE64F4A-88C6-409C-8B5C-D07880EBDC98" className="slice-layer" data-objectid="CCE64F4A-88C6-409C-8B5C-D07880EBDC98">
            <picture><img src="assets/6.png" alt="" /></picture>
            <div>
                <h3>6</h3>
                <small>143.99px × 131.69px</small>
            </div>
          </li>
          <li id="slice-0EA8105B-9942-442B-A704-B8E85A7A6398" className="slice-layer" data-objectid="0EA8105B-9942-442B-A704-B8E85A7A6398">
            <picture><img src="assets/5.png" alt="" /></picture>
            <div>
                <h3>5</h3>
                <small>142.78px × 131.69px</small>
            </div>
          </li>
          <li id="slice-48B4E2E4-A775-4FCE-A0CE-0B0B33EE3E11" className="slice-layer" data-objectid="48B4E2E4-A775-4FCE-A0CE-0B0B33EE3E11">
            <picture><img src="assets/4.png" alt="" /></picture>
            <div>
                <h3>4</h3>
                <small>143.99px × 131.69px</small>
            </div>
          </li>
          <li id="slice-88E6CC4D-C66D-47B9-AC10-8F6555B4B952" className="slice-layer" data-objectid="88E6CC4D-C66D-47B9-AC10-8F6555B4B952">
            <picture><img src="assets/3.png" alt="" /></picture>
            <div>
                <h3>3</h3>
                <small>143.99px × 143.99px</small>
            </div>
          </li>
          <li id="slice-BA45E7E5-8D59-4EC2-AAD9-5C795C227E8C" className="slice-layer" data-objectid="BA45E7E5-8D59-4EC2-AAD9-5C795C227E8C">
            <picture><img src="assets/2.png" alt="" /></picture>
            <div>
                <h3>2</h3>
                <small>142.78px × 143.99px</small>
            </div>
          </li>
          <li id="slice-842F6486-F72A-4231-BB40-4E846D1FB201" className="slice-layer" data-objectid="842F6486-F72A-4231-BB40-4E846D1FB201">
            <picture><img src="assets/1.png" alt="" /></picture>
            <div>
                <h3>1</h3>
                <small>143.99px × 143.99px</small>
            </div>
          </li>
          <li id="slice-B3E42741-3D5D-40C8-AA91-0B3714215F0B" className="slice-layer" data-objectid="B3E42741-3D5D-40C8-AA91-0B3714215F0B">
            <picture><img src="assets/Line.png" alt="" /></picture>
            <div>
                <h3>Line</h3>
                <small>435px × 2px</small>
            </div>
          </li>
          <li id="slice-3D21C43E-2604-4BB7-8AED-5C8AD7EA08BF" className="slice-layer" data-objectid="3D21C43E-2604-4BB7-8AED-5C8AD7EA08BF">
            <picture><img src="assets/05 videos.png" alt="" /></picture>
            <div>
                <h3>05 videos</h3>
                <small>66px × 19px</small>
            </div>
          </li>
          <li id="slice-22698E04-83A7-4EC7-8B37-4113AD6922D9" className="slice-layer" data-objectid="22698E04-83A7-4EC7-8B37-4113AD6922D9">
            <picture><img src="assets/IGTV.png" alt="" /></picture>
            <div>
                <h3>IGTV</h3>
                <small>35px × 19px</small>
            </div>
          </li>
          <li id="slice-EFBF6EE6-C328-4BC9-8B6A-6BABCE8006DE" className="slice-layer" data-objectid="EFBF6EE6-C328-4BC9-8B6A-6BABCE8006DE">
            <picture><img src="assets/Oval.png" alt="" /></picture>
            <div>
                <h3>Oval</h3>
                <small>65.34px × 65.34px</small>
            </div>
          </li>
      </ul>
      </section><section id="colors" style={{display: 'none'}}>
      <ul className="color-list">
          <li id="color-0" data-color="%7B%22rgb%22:%7B%22r%22:211,%22g%22:211,%22b%22:211%7D,%22hsl%22:%7B%22h%22:0,%22s%22:0,%22l%22:83%7D,%22alpha%22:255,%22color-hex%22:%22#D3D3D3%20100%25%22,%22argb-hex%22:%22#FFD3D3D3%22,%22rgba-hex%22:%22#D3D3D3FF%22,%22css-rgba%22:%22rgba(211,211,211,1)%22,%22css-hsla%22:%22hsla(0,0%25,83%25,1)%22,%22ui-color%22:%22(r:211.00%20g:211.00%20b:211.00%20a:1.00)%22%7D">
            <em><i style={{background: 'rgba(211,211,211,1)'}} /></em>
            <div>
                <h3>1. #D3D3D3</h3>
                <small>#D3D3D3 100%</small>
            </div>
          </li>
      </ul>
      </section>
    </aside>
  )  
}

export default Navbar