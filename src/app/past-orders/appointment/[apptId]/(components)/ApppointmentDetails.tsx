'use client';

import React from 'react';

type DetailsProps = object;

const AppointmentDetails: React.FC<DetailsProps> = () => {
  // const router = useRouter();

  // function handleYes() {
  //   setLoadingYes(true);

  //   setError('');
  //   updateAppointment(apptId as string, {
  //     status: 'Cancelled',
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setLoadingYes(false);
  //       setCancellationPrompt(false);
  //       setAppointment((prev) => {
  //         return Object.assign({ ...prev }, {
  //           status: 'Cancelled',
  //         } as IAppointmentDetails);
  //       });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       setLoadingYes(false);
  //       setError(`Server Error: ${e}. Please try to Cancel Again`);
  //     });
  // }

  return <></>;
};
export default AppointmentDetails;
