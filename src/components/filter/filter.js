import './filter.scss'

function Filter() {
    return(
        <div className="container">
            <div className="filter">
                <form action="change">
                    <label htmlFor="">Lookiing for</label>
                    <input type="text"
                           placeholder='start typing here...' />
                </form>
                <div className="filter__btns">
                    <span>Or filter</span>
                    <ul className='filter__btns_list'>
                        <li><button className='filter__btn'>Brazil</button></li>
                        <li><button className='filter__btn'>Kenya</button></li>
                        <li><button className='filter__btn'>Columbia</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Filter