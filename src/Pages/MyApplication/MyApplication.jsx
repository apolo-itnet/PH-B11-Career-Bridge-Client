import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import { loadingNavFooter } from '../../Shared/LoadingSpinner';
import useAuth from '../../Hooks/useAuth';
import { myApplicationPromise } from '../../API/applicationApi';



const MyApplication = () => {

  const {user} =useAuth();

  return (
    <div>
      <h1 className='text-4xl text-center font-bold py-6'>My Application </h1>
      <section>
        <ApplicationStat></ApplicationStat>
        <Suspense fallback={loadingNavFooter} >
          <ApplicationList
              myApplicationPromise={myApplicationPromise(user.email)}
          >
          </ApplicationList>
        </Suspense>
      </section>
    </div>
  );
};

export default MyApplication;