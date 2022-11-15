import { Link, Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentPage } from './store';

function App() {
  const [curPage, setCurPage] = useRecoilState(currentPage);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='container-fluid col-2 col-xl-1 bg-gray-100 pt-2'>
          <ul className='d-flex flex-column nav justify-content-between align-items-center pl-auto'>
            <li className='w-100 nav-item py-2'>
              <Link className='nav-link text-center font-weight-bold px-1'>
                아파트스토리
              </Link>
            </li>
            <li
              className={
                curPage === 'employee'
                  ? 'w-100 border-bottom border-bottom-2 border-gray-800 nav-item py-2'
                  : 'w-100 nav-item py-2'
              }
              onClick={() => setCurPage('employee')}
            >
              <Link
                to={`/employee`}
                className='nav-link text-center font-weight-bold px-1'
              >
                직원
              </Link>
            </li>
            <li
              className={
                curPage === 'patrol'
                  ? 'w-100 border-bottom border-bottom-2 border-gray-800 nav-item py-2'
                  : 'w-100 nav-item py-2'
              }
              onClick={() => setCurPage('patrol')}
            >
              <Link
                to={`/patrol`}
                className='nav-link text-center font-weight-bold px-1'
              >
                순찰
              </Link>
            </li>
          </ul>
        </div>
        <div className='mt-3 col'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
