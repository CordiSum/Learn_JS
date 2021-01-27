import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://wroom.ru/i/cars2/toyota_rav4_5.jpg" />
            </div>
            <div className={s.descriptionBlock}>av descr</div>
        </div>
    )
}

export default ProfileInfo;