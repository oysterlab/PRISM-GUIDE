import React, { useEffect, useRef, useState } from 'react'

interface MoveData {
  x: number
  y: number
  scrollLeft: number
  scrollTop: number
}

function ScreenViewer() {
  const [moveData, setMoveData] = useState<MoveData|null>(null)
  const [moving, setMoving] = useState<boolean>(false)

  const viewer = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const onMouseDown = (e:globalThis.MouseEvent) => {
      if (viewer.current == null) return

      setMoveData({
        x: e.clientX,
        y: e.clientY,
        scrollLeft: viewer.current.scrollLeft,
        scrollTop: viewer.current.scrollTop,        
      })

      setMoving(true)
    }

    const onMouseMove = (e:globalThis.MouseEvent) => {
      if (viewer.current == null || moveData == null) return
      if (!moving) return
      viewer.current.scrollLeft = (moveData.x - e.clientX) + moveData.scrollLeft
      viewer.current.scrollTop = (moveData.y - e.clientY) + moveData.scrollTop  
    }

    const onMouseUp = (e:globalThis.MouseEvent) => setMoving(false)

    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)    
    return () => {
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)    
    }
  })

  return (
    <section className="screen-viewer" ref={viewer}>
      <div className="screen-viewer-inner" style={{width: '4360px', height: '4360px'}}>
        <div id="screen" className="screen" style={{width: '436px', height: '872px', background: '#fff'}}>
          <div id="rulers" style={{display: 'none'}}>
            <div id="rv" className="ruler v" style={{left: '0px', width: '436px'}} />
            <div id="rh" className="ruler h" style={{top: '29px', height: '60px'}} />
          </div>
          <div id="flows" style={{display: 'none'}} />
          <div id="layers">
            <div id="layer-0" className="layer layer-5CCFE5F5-3451-4CF6-8916-38E866588CEA" data-index={0} percentage-width="96.4%" percentage-height="11.5%" data-width="420.51px" data-height="100px" style={{left: '15.4865913391113px', top: '761.820007324219px', width: '420.5134086608887px', height: '100px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-1" className="layer layer-7335F0EB-7F76-42DE-8C90-B437F799D51E" data-index={1} percentage-width="100%" percentage-height="56.2%" data-width="436px" data-height="490px" style={{left: '0px', top: '255px', width: '436px', height: '490px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-2" className="layer layer-3D89B587-AF88-45F5-B8BF-35C8907E799F" data-index={2} percentage-width="100%" percentage-height="6.1%" data-width="436px" data-height="53px" style={{left: '0px', top: '202px', width: '436px', height: '53px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-3" className="layer layer-B73CCC1C-8C0E-4AEF-B7F9-98ADDD2B2D41" data-index={3} percentage-width="100%" percentage-height="0.2%" data-width="436px" data-height="1.5px" style={{left: '0px', top: '200.860000610352px', width: '436px', height: '1.5px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-4" className="layer layer-08946AF0-9CD3-4BCC-9DC4-21CCDFA3CAE2" data-index={4} percentage-width="100%" percentage-height="12.8%" data-width="436px" data-height="112px" style={{left: '0px', top: '89.5400009155273px', width: '436px', height: '111.99999999999999px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-5" className="layer layer-7D167667-C7CA-462A-81F3-D06494A303BC" data-index={5} percentage-width="12.6%" percentage-height="9.7%" data-width="55px" data-height="85px" style={{left: '381px', top: '106px', width: '55px', height: '85px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-6" className="layer layer-F2642A16-893E-4959-9148-4FD57679EA4E" data-index={6} percentage-width="16.5%" percentage-height="10.1%" data-width="72px" data-height="88px" style={{left: '282.4892578125px', top: '103px', width: '72px', height: '88px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-7" className="layer layer-27279D8A-B9CD-421C-AEDE-F256F457CF8E" data-index={7} percentage-width="15.8%" percentage-height="9.7%" data-width="69px" data-height="85px" style={{left: '191.91633605957px', top: '106px', width: '68.99999999999997px', height: '85px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-8" className="layer layer-FAC464F9-B9C0-47DF-A3D9-0F8B96BE24E1 selected hidden" data-index={8} percentage-width="15.6%" percentage-height="9.7%" data-width="68px" data-height="85px" style={{left: '101.850006103516px', top: '106px', width: '68px', height: '85px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-9" className="layer layer-A33D7FCF-335F-4B3B-923A-5C7AFF27715F" data-index={9} percentage-width="12.6%" percentage-height="1.6%" data-width="55px" data-height="14px" style={{left: '17.99999952316281px', top: '176px', width: '55px', height: '14px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-10" className="layer layer-F2E89DFD-0E95-473C-BEC4-FF2593DB0B7A" data-index={10} percentage-width="13.8%" percentage-height="6.9%" data-width="60px" data-height="60px" style={{left: '15.7299995422363px', top: '106.4800033569336px', width: '60px', height: '60px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-11" className="layer layer-5B23F4CF-14F6-4C85-B0AA-078452655546" data-index={11} percentage-width="4.2%" percentage-height="2.1%" data-width="18.15px" data-height="18.15px" style={{left: '60.49999952316281px', top: '152.46001100540158px', width: '18.149999618530302px', height: '18.149999618530302px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-12" className="layer layer-ED644769-316F-4D18-8B8E-FE980415679A" data-index={12} percentage-width="2.2%" percentage-height="1.1%" data-width="9.68px" data-height="9.68px" style={{left: '64.73499965667722px', top: '156.695011138916px', width: '9.680000305175781px', height: '9.680000305175781px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-16" className="layer layer-133525CC-62B5-46DB-849F-B8BF3A095083" data-index={16} percentage-width="100%" percentage-height="6.9%" data-width="436px" data-height="60px" style={{left: '0px', top: '29px', width: '436px', height: '60px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
            <div id="layer-17" className="layer layer-D47BD2AB-2FC6-4334-8F76-888D33BC788D" data-index={17} percentage-width="100%" percentage-height="3.3%" data-width="436px" data-height="29px" style={{left: '0px', top: '0px', width: '436px', height: '29px'}}>
              <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
              <b className="et h" /><b className="er v" /><b className="eb h" /><b className="el v" />
            </div>
          </div>
          <div id="notes" />
          <div id="td" className="distance v" style={{left: '135.85px', top: '89px', height: '17px', display: 'none'}}>
            <div data-height="17px" percentage-height="1.9%" />
          </div>
          <div id="rd" className="distance h" style={{left: '169.85px', top: '148.5px', width: '266.15px'}}>
            <div data-width="266.15px" percentage-width="61%" />
          </div>
          <div id="bd" className="distance v" style={{left: '135.85px', top: '191px', height: '64px', display: 'none'}}>
            <div data-height="64px" percentage-height="7.3%" />
          </div>
          <div id="ld" className="distance h" style={{left: '0px', top: '148.5px', width: '101.85px', display: 'none'}}>
            <div data-width="101.85px" percentage-width="23.4%" />
          </div>
        </div>
      </div>
      <div className="overlay" />
    </section>
  )
}

export default ScreenViewer