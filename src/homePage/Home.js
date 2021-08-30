import { Menu } from '../menu/Menu'

export function Home() {
  return (
    <>
      <Menu />
      <div className='parentHome'>
        <span className='overImageText1'>Find a Code Bootcamp</span>
        <span className='overImageText2'>Find, rate and read reviews on coding bootcamps</span>
        <div className='parentSearchOverImage'>
          <div className='parentInputOverImage'>
            <input className='inputOverImage' value='Miles From' />
            <input className='inputOverImage' value='Enter Zipcode'/>
          </div>
          <div>
            <button className='buttonOverImage'>Find Bootcamps</button>
          </div>
        </div>
      </div>
    </>
  )
}