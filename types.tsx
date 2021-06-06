/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Companies: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type CompaniesParamList = {
  CompaniesScreen: undefined;
  CompanyDetailsScreen: companyData;
};

export type companyData = {
  website: string,
  top_students: string[],
  student_session_days: string,
  name: string,
  logo_url: string,
  id: number,
  host_phone_number: string,
  host_name: string,
  host_mail: string,
  description: string
}
