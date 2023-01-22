import React from 'react'
import '../css/home.css'
import { useNavigate } from 'react-router-dom'

function Home() {

  let navigate = useNavigate()

  const switchToRecipeMaker = () => {
    if (localStorage.getItem('userid') === null) {
        return navigate("/registration")
    }
    navigate('/add-recipe')
  }

  return (
    <div className='home'>
      <div className='div-svg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#584700" fill-opacity="1" d="M0,224L21.8,202.7C43.6,181,87,139,131,149.3C174.5,160,218,224,262,240C305.5,256,349,224,393,208C436.4,192,480,192,524,197.3C567.3,203,611,213,655,192C698.2,171,742,117,785,106.7C829.1,96,873,128,916,154.7C960,181,1004,203,1047,181.3C1090.9,160,1135,96,1178,106.7C1221.8,117,1265,203,1309,218.7C1352.7,235,1396,181,1418,154.7L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
        <h1 className='home-title'>Recipes</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#584700" fill-opacity="1" d="M0,96L20,106.7C40,117,80,139,120,138.7C160,139,200,117,240,112C280,107,320,117,360,122.7C400,128,440,128,480,106.7C520,85,560,43,600,48C640,53,680,107,720,154.7C760,203,800,245,840,218.7C880,192,920,96,960,64C1000,32,1040,64,1080,101.3C1120,139,1160,181,1200,208C1240,235,1280,245,1320,213.3C1360,181,1400,107,1420,69.3L1440,32L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
      </div>
      <div className='home-main-info'>
        <div className='home-info-box'>
          <div className='home-info'>
            <h2 className='info-title'>Search</h2>
            <p className='info-text'>This site will help you choose from a wide variety of recipes with the ingredients you have available.</p>
            <button className='redirect-to-page-btn' onClick={() => navigate(`/recipe-filter`)} >Search recipe!</button>
          </div>
          <img className='home-box-img' src='./img/food.png'></img>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#584700" fill-opacity="1" d="M0,288L18.5,293.3C36.9,299,74,309,111,272C147.7,235,185,149,222,138.7C258.5,128,295,192,332,192C369.2,192,406,128,443,117.3C480,107,517,149,554,149.3C590.8,149,628,107,665,106.7C701.5,107,738,149,775,144C812.3,139,849,85,886,80C923.1,75,960,117,997,138.7C1033.8,160,1071,160,1108,138.7C1144.6,117,1182,75,1218,90.7C1255.4,107,1292,181,1329,224C1366.2,267,1403,277,1422,282.7L1440,288L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
        <div className='home-info-box'>
          <img className='home-box-img' src='./img/food.png'></img>
          <div className='home-info'>
            <h2 className='info-title'>Diversity</h2>
            <p className='info-text'>We also have many recipes from different cuisines and diets for breakfast, lunch and dinner.</p>
            <button className='redirect-to-page-btn' onClick={() => navigate(`/search`)}>Сhoose</button>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#584700" fill-opacity="1" d="M0,160L18.5,176C36.9,192,74,224,111,202.7C147.7,181,185,107,222,80C258.5,53,295,75,332,117.3C369.2,160,406,224,443,250.7C480,277,517,267,554,224C590.8,181,628,107,665,101.3C701.5,96,738,160,775,202.7C812.3,245,849,267,886,229.3C923.1,192,960,96,997,101.3C1033.8,107,1071,213,1108,234.7C1144.6,256,1182,192,1218,154.7C1255.4,117,1292,107,1329,85.3C1366.2,64,1403,32,1422,16L1440,0L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
        <div className='home-info-box'>
          <div className='home-info'>
            <h2 className='info-title'>Create recipes!</h2>
            <p className='info-text'>You can create your own recipes with our constructor! To go through a quick registration on our website.</p>
            <button className='redirect-to-page-btn' onClick={() => switchToRecipeMaker()}>Registration</button>
          </div>
          <img className='home-box-img' src='./img/food.png'></img>
        </div>
      </div>
    </div>
  )
}

export default Home
