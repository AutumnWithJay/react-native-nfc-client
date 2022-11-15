import { useQuery } from 'react-query';
import { patrolApi } from '../fetchers';
import { convertDate } from '../util/convertDate';

export default function Patrol() {
  const getEmployeeData = async () => {
    const response = await patrolApi.get('FD0642');
    return response;
  };

  const { isLoading, data } = useQuery({
    queryKey: 'patrol',
    queryFn: getEmployeeData,
    refetchOnWindowFocus: false,
    staleTime: 60 * 5000,
  });

  return (
    !isLoading && (
      <div style={{ height: '100vh' }} className='container-fluid'>
        <div className='mb-6'>
          <h1 className='mb-3 font-weight-bold'>순찰 목록</h1>
          <table className='table border-bottom'>
            <thead className='thead-light'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>구역</th>
                <th scope='col'>일자</th>
                <th scope='col'>담당자</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((data, idx) => {
                const timestamp = new Date(data.patrolTime._seconds * 1000);

                return (
                  <tr key={data.userId}>
                    <td>{idx + 1}</td>
                    <td>{data.areaId}</td>
                    <td>{convertDate('patrol', timestamp)}</td>
                    <td>{data.guardName}</td>
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
