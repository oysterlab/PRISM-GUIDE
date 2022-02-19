import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { PropertyData } from '../../store/interface'

interface CategoryData {
  name: string
  properties: PropertyData[]
}

function Inspector() {
  const selectedLayer = useAppSelector((state) => state.app.selectedLayer)
  const isActive = selectedLayer ? 'active' : ''
  const categories = selectedLayer?.properties.reduce((catetories, property) => {
    const category = catetories.find(({name}) => property.designCategory == name)
    if (!category) catetories.push({ name: property.designCategory, properties: [property] })
    else category.properties.push(property)
    return catetories
  }, [] as CategoryData[])

  return (
    <aside id="inspector" className={`inspector ${isActive}`}>
      <h2>{selectedLayer?.name}</h2>
      <section>
        <h3>PROPERTIES</h3>
        <div className="context">
          {
            categories?.map(({name, properties}) => {
              return (
                <div className="item" data-label={name}>
                  <div className="item-split">                 
                    {
                      properties.map((_, i) => {
                        if (i % 2 == 0) return
                        const firstProp = properties[i]
                        const secondProp = properties[i+1]
                        return (
                          <div className="prop">
                            <label data-label={firstProp.designName}>
                              <input type="text" defaultValue={`${firstProp.designValue}${firstProp.designUnit}`} readOnly/>
                            </label>
                            {secondProp && (
                              <label data-label={secondProp.designName}>
                                <input type="text" defaultValue={`${secondProp.designValue}${secondProp.designUnit}`} readOnly/>
                              </label>
                            )}
                          </div>
                        )
                      })
                    }                    

 
                  </div> 
                </div>
              )
            })
          }
        </div>
      </section>
      <section>
        <h3>EXPORTABLE</h3>
        <div className="context">
          <ul className="exportable">
            <li><a href="assets/Two.png" target="_blank" data-format="PNG"><img src="assets/Two.png" alt="Two.png" />Two.png</a></li>
          </ul>
        </div>
      </section>
    </aside>
  )
}

export default Inspector