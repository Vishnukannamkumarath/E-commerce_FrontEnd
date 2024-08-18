import axios from 'axios';
import './test.css'
function Fur({ image, title, currentPrice, originalPrice, description, loved }){
    return(
        <div>
            <div style={{backgroundColor:"green"}}> <l style={{marginLeft:"200px",fontSize:"48px",color:"white"}}><b>FURNITURES</b></l><br/></div> 
          <div  style={{display:"flex"}}>
          <div className="card">
      <div className="card-header">
        <img src="sofa.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Sofa </h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="stable.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Study Table</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="shoerack.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Shoe Racks</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="sbeds.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Sofa beds</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="portablelap.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Portable Laptop Table</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
    </div>
            </div>
            <div style={{display:"flex"}}>
            <div className="card">
      <div className="card-header">
        <img src="outdoorchair.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Out door Chairs</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="officechair.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Office Chairs</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="kitchentrolley.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Kitchen Trolley</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="matress.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Matresses</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="dresstables.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Dressing Tables</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
    </div>
            </div>

        </div>

    );
}export default Fur;