import { Menu } from "../menu/Menu";
import img1 from '../Image/image_1.png';
import img2 from '../Image/showcase1.png';
import img3 from '../Image/image_3.png'
import img4 from '../Image/image_4.png'

export function Major() {
  return (
    <>
      <Menu />
      <div className="majorPage">
        <div className="majorParent">
          <div className='filterParent'>

            <div className='location'>
              <p>By Location</p>
              <div className='parentInputInLocation'>
                <input type='text' placeholder='Miles From' />
                <input type='text' className="inp2" placeholder='Enter Zipcode' />
              </div>
              <button >Find Bootcamps</button>
            </div>

            <div className='filterP'>Filter</div>
            <div className='filterR'>Rating</div>
            <div className='filterInput'>
              <input type='text' placeholder='Any' />
              <svg className='topTriangle' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 0L9.33013 5.33333H0.669873L5 0Z" fill="#403F3F" />
              </svg>
              <svg className='bottomTriangle' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 6L9.33013 0.666667H0.669873L5 6Z" fill="#403F3F" />
              </svg>
            </div>

            <div className='filterR'>Budget</div>
            <div className='filterInput'>
              <input type='text' placeholder='Any' />
              {/* <div> */}
              <svg className='topTriangle' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 0L9.33013 5.33333H0.669873L5 0Z" fill="#403F3F" />
              </svg>
              <svg className='bottomTriangle' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 6L9.33013 0.666667H0.669873L5 6Z" fill="#403F3F" />
              </svg>
              {/* </div> */}
            </div>

            <button>Find Bootcamps</button>
          </div>

          <div className='websiteParent'>

            <div className='childWebsite marginChildWebsite'>
              <div className='imageWebsite'>
                <img src={img1} />
              </div>
              <div>
                <div className='titleWebsite'>Devworks Bootcamp</div>
                <div className='cityWebsite'>Boston, MA</div>
                <div className='descriptionWebsite'>Web development, UI/UX, Mobile Development</div>
              </div>
              <div className='greenBox'>8.8</div>
            </div>

            <div className='childWebsite'>
              <div className='imageWebsite'>
                <img src={img2}  />
              </div>
              <div>
                <div className='titleWebsite'>ModernTech Bootcamp</div>
                <div className='cityWebsite'>Boston, MA</div>
                <div className='descriptionWebsite'>Web development, UI/UX, Mobile Development</div>
              </div>
              <div className='greenBox'>7.5</div>
            </div>

            <div className='childWebsite'>
              <div className='imageWebsite'>
                <img src={img3} />
              </div>
              <div>
                <div className='titleWebsite'>Codemasters</div>
                <div className='cityWebsite'>Burlington, VT</div>
                <div className='descriptionWebsite'>Web development, Data science, Marketing</div>
              </div>
              <div className='greenBox'>9.2</div>
            </div>

            <div className='childWebsite'>
              <div className='imageWebsite'>
                <img src={img4}  />
              </div>
              <div>
                <div className='titleWebsite'>DevCentral Bootcamp</div>
                <div className='cityWebsite'>Kingston, RI</div>
                <div className='descriptionWebsite'>Web development, UI/UX, Mobile Development, Marketing</div>
              </div>
              <div className='greenBox'>6.4</div>
            </div>
 
            <div className='pageNumberParent'>
              <div className='previous'>Previous</div>
              <div className='numbers'>1</div>
              <div className='numbers'>2</div>
              <div className='numbers'>3</div>
              <div className='next'>Next</div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}