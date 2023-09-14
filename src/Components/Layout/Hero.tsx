import banner from '../../assets/banner.jpg';

function Hero(props) {
  return (
    <section>
      <div className="container mx-auto py-8">
        
        <img src={banner} alt="front of the house" />
      
      </div>
    </section>
  );
}

export default Hero;