import sign from '../../assets/imovel-assinatura.jpg';

function Search() {
  return (
    <section>
      <div className="container mx-auto">
      
        <h1 className='font-bold text-center'>Find the property of your dreams</h1>

        <h2 className='text-center text-blue-400'>The real estate agency that helps you with your dream property</h2>

        <img className='w-44 mx-auto py-4' src={sign} alt="a small house in front of her a key" />

        <p>
        For 10 years in the business, we have won the trust of countless customers. This is because we always look for 
        the best conditions for both those who want to buy, 
        and for those who want to sell or rent. We offer a quality service serving as a bridge between interested parties.
        </p>

      </div>
    </section>
  );
}

export default Search;