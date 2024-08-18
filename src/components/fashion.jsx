import react from 'react';
import axios from 'axios';
import './test.css'
  function Fas({ image, title, currentPrice, originalPrice, description, loved }){
    const sprice=250;
    const bprice=450;
    const pprice=500;
    async function scart(){
        const response=await axios.post('http://localhost:5002/cart',{
            sprice

        })
    }
    async function bcart(){
        const response=await axios.post('http://localhost:5002/cart',{
            bprice

        })
    }
    async function pcart(){
        const response=await axios.post('http://localhost:5002/cart',{
            pprice

        })
    }
    return(
        <div>
            <div style={{backgroundColor:"green"}}> <l style={{marginLeft:"200px",fontSize:"48px",color:"white"}}><b>FASHION</b></l><br/></div> 
          <div  style={{display:"flex"}}>
          <div className="card">
      <div className="card-header">
        <img src="shirt1.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Shirts</h3>
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
        <img src="tshirt.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>T-shirts</h3>
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
        <img src="regular.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Regular shirts</h3>
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
        <img src="armykid.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3> Army Kids wears</h3>
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
        <img src="baniyan.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Hoodys</h3>
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
        <img src="cottonpants.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Mens Cotton pants</h3>
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
        <img src="men_casual_shirt.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Mens Casual Shirts</h3>
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
        <img src="track.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Track Suits</h3>
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
        <img src="tie.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Ties</h3>
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
        <img src="shirt.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Shirt</h3>
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
}export default Fas;
