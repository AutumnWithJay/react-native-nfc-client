import { useQuery } from 'react-query';
import { employeeApi } from '../fetchers';
import { convertDate } from '../util/convertDate';

export default function Employee() {
  const getEmployeeData = async () => {
    const response = await employeeApi.get('FD0642');
    return response;
  };

  const { isLoading, data } = useQuery({
    queryKey: 'employees',
    queryFn: getEmployeeData,
    refetchOnWindowFocus: false,
    staleTime: 60 * 5000,
  });

  return (
    !isLoading && (
      <div style={{ height: '100vh' }} className='container-fluid'>
        <div className='mb-6'>
          <h1 className='mb-3 font-weight-bold'>직원 목록</h1>
          <table className='table border-bottom'>
            <thead className='thead-light'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>이름</th>
                <th scope='col'>연락처</th>
                <th scope='col'>입사일</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((data, idx) => {
                const timestamp = new Date(data.registerDate._seconds * 1000);

                return (
                  <tr key={data.userId}>
                    <td>{idx + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td>{convertDate('employee', timestamp)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
}
