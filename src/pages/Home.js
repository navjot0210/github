// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import gitIcon from '../img/git-icon.png';
import Search from '../components/Search';

function Home() {
  return (
    <>
      <Helmet>
        <title>Github-Finder</title>
      </Helmet>
      <section className='center'>
        <div className='grid'>
          <figure>
            <img className='git-icon' src={gitIcon} alt='github' />
          </figure>
          <Search />
        </div>
      </section>
    </>
  )
}

export default Home;