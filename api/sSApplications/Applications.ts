import { getAuth, postAuth, putAuth } from "../http/_HttpHelpers";


export interface SSApplication {
  id: number;
  motivation: string;
  status: number;
  studentId: number;
  companyId: number;
  booked: boolean;
}
export interface UpdateApplicationDto {
  status: number;
}
export const getApplications = async (): Promise<SSApplication[]> => {
  const response = await getAuth(`/applications/my/company`);
  const json = await response.json();
  const Applications = json as SSApplication[];
  return Applications;
}
export const getApplication = async (applicationId: number): Promise<SSApplication> => {
  const response = await getAuth(`/applications/${applicationId}`);
  const json = await response.json();
  const Applications = json as SSApplication;
  return Applications;
}
export const sendApplication = async (companyId: number, msg: string) => {
  await postAuth(`/applications/company/${companyId}`, msg);
};
export const changeApplication = async(applicationId: number, status: UpdateApplicationDto) => {
  await putAuth(`/applications/${applicationId}`, status);
}
