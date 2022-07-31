import foto from './../../../img/profile.jpg'
import './Profile.css'

function Profile() {

    return (

        <div className="profile">
            <div className="block_profile">
                <div className='block_foto'>
                    <img src={foto} alt='' />
                </div>

                <div className="block_info">
                    <div className="block_name_user">
                        Иванов Иван
                    </div>
                    <div className='block_about_me'>Родился 10 мая 1976 года в столице Непала Катманду.
                        Член союза фотохудожников России.
                        Участник проекта «Выживание человека в дикой природе Камчатки».
                        Постоянно сотрудничает с журналами о фотографии, ведет рубрику "фотопутешествия".
                        Снимал под водой, в пещерах, в горах и даже на воздушном шаре. Ищет свои кадры в самых
                        необычных и интересных уголках страны и планеты. </div>
                </div>

            </div>
        </div>
    );
}

export default Profile;