import './Main.css'
import image from "./../../../img/turizm-krasivo-1.jpg"
function Main() {
  return (
    <div className="main">
      <div className='block_main'>
        <div className='text'>
          <div className='block_header'>
            "Aitishik в путушествии"
          </div>
          <div className='block_phrase'>
            "Путешествия лишают тебя дара речи,
            а потом превращают в лучшего рассказчика" - <section>Ибн Баттута</section>
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
