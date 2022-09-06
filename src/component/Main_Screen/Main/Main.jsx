import './Main.css'
import image from "./../../../img/turizm-krasivo-1.jpg"
function Main() {
  return (
    <div className="main">
      <div className='block_main'>
        <div className='text'>
          <div className='block_header'>
            "Aitishik on a journey"
          </div>
          <div className='block_phrase'>
            "Traveling—it leaves you speechless, 
            then turns you into a storyteller" - <section>Ibn Battuta</section>
          </div>
        </div>

      </div>
      <div className='image_screen'>
        <img src={image} alt='eeee' />
      </div>
    </div>

  );
}

export default Main;
