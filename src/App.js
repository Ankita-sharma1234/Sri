import React, { useEffect } from "react";
import Signup from '././components/Register&Login/Signup';
import Signin from '././components/Register&Login/Signin';
import { Routes, Route, Navigate } from 'react-router-dom';
import Course from '././components/Register&Login/Course';
import Erp from './components/Register&Login/Erp';
import Registration from './AdminComponent/HodMainDetails';
import Registrationn from "./AdminComponent/StudentMainDetails"
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

/*--------------------STUDENT Routes----------------------------------------------*/
import StudentDashboardHome from './components/Register&Login/StudentDashboardHome';
import StudentMainDetails from './AdminComponent/StudentMainDetails';
import StudentHome from './components/Register&Login/StdentHome';
import StudentDashboard from './AdminComponent/StudentDashboard';
import StudentWaiting from './components/Register&Login/StudentWaiting';
import StudentVerify from './AdminComponent/StudentVerify';
import EnrollementForm from './AdminComponent/EnrollementForm';
import OnlyHeader from './AdminComponent/OnlyHeader';
import Success from './AdminComponent/Payment/Success';
import Failure from './AdminComponent/Payment/Failure';
import PaymentPage from './AdminComponent/Payment/PaymentPage';
import StudentAllDetail from './components/Register&Login/StudentAllDetail';

/*-------------------- Website Main Page Routes----------------------------------------------*/
import MainPage from './HomePage/MainPage';

/*--------------------HOD Routes----------------------------------------------*/
import HodDashboard from './AdminComponent/HodDashboard';
import HodMainDetails from './AdminComponent/HodMainDetails';
import HodSignUp from './AdminComponent/HodSignup';
import HodSignin from './AdminComponent/HodSignin';
import Dashboard from './AdminComponent/HodMainDas';
import Pending from './AdminComponent/SudentPending';
import VerifyDetailed from './AdminComponent/VerifyDetailed';

/*--------------------Admin Routes----------------------------------------------*/
import AdminLogin from './Main_Admin/Masters/Registered_Login/Admin_login';
import AdminDashboard from './Main_Admin/Masters/Admin_Dashboard/AdminDashboard';
import EnrollementG from './Main_Admin/Masters/EnrollmentG';
import Branchmapping from "./Main_Admin/Masters/Branchmapping"
import Centermaster from "./Main_Admin/Masters/Centermaster"
import SpecializationMaster from './Main_Admin/Masters/SpecializationMaster';
import SpecializationSubjectMapping from "./Main_Admin/Masters/SpecializationSubjectMapping"
import SpecializationTypeMaster from "./Main_Admin/Masters/SpecializationTypeMaster"
import SubjectHeaderInsert from "./Main_Admin/Masters/SubjectHeaderInsert"
import UploadSubjectMasterFromExcelData from "./Main_Admin/Masters/UploadSubjectMasterFromExcelData"
import CreateCollege from "./Main_Admin/Masters/CreateCollege"
import AdmissionSessionMaster from "./Main_Admin/Masters/AdmissionSessionMaster"
import FacultyMaster from "./Main_Admin/Masters/FacultyMaster"
import DepartmentMaster from "./Main_Admin/Masters/DepartmentMaster"
import CourseType from "./Main_Admin/Masters/CourseType"
import CourseMaster from "./Main_Admin/Masters/CourseMaster"
import BranchMaster from "./Main_Admin/Masters/BranchMaster"
import SubBranchMaster from "./Main_Admin/Masters/SubBranchMaster"
import CourseGroupMaster from "./Main_Admin/Masters/CourseGroupMaster"
import AdmissionOpen from "./Main_Admin/Masters/AdmissionOpen"
import ReservationMaster from "./Main_Admin/Masters/ReservationMaster"
import CreateCounsellingRound from "./Main_Admin/Masters/CreateCounsellingRound"
import LastExamSubjectGroup from "./Main_Admin/Masters/LastExamSubjectGroup"
import GradePointMaster from "./Main_Admin/Masters/GradePointMaster"
import SubjectMasterExcelDownload from "./Main_Admin/Masters/SubjectMasterExcelDownload"
import SubjectMasterPaperWise from "./Main_Admin/Masters/SubjectMasterPaperWise"
import SubGroupMaster from "./Main_Admin/Masters/SubGroupMaster"
import TransferSubject from "./Main_Admin/Masters/TransferSubject"
import TransferSubjectGroup from "./Main_Admin/Masters/TransferSubjectGroup"
import ProgramScheduling from "./Main_Admin/Masters/ProgramScheduling"
import ErpDashboard from './Main_Admin/Masters/ErpDashboard';
import Search from './Main_Admin/Masters/Search';
import Notification from './HomePage/Notification';
import Off from './HomePage/Off.js';
import Not from './HomePage/Not.js';
import Imp from './HomePage/Imp.js';
import Edetails from './HomePage/Edetails.jsx'
import Notice from './HomePage/Notice.js';
import EnrolledStudentlist from "./Main_Admin/Masters/EnrolledStudent_list";
import EnrollementStudentSearch from "./Main_Admin/Masters/EnrolledStudent_search";
import StudentRegistrationList from "./Main_Admin/Masters/StudentRegistrationList"
import Admin_Pending from "./Main_Admin/Masters/Admin_Pending.jsx";
import TotalFeePaid from "./Main_Admin/Masters/TotalFeePaid"
import TotalRegistered from "./Main_Admin/Masters/TotalRegistered"
import TotalEnrolled from "./AdminComponent/TotalEnrolled";
import TotalSession from "./AdminComponent/TotalSession";
import TotalRegisStdtHod from "./AdminComponent/HodRegistStdt";
import TotalEnrolledAdmin from "./Main_Admin/Masters/AdminTotalEnrollStdt";
import AdminStdtSearch from "./Main_Admin/Masters/AdminStdtSearch";
import AdminUpdtStdt_Detail from "./Main_Admin/Masters/AdminUpdtStdt_Detail";
import AdminUpdateAllDetail from "./Main_Admin/Masters/AdminUpdateAllDetail";
import AdminUpdate_Documents from "./Main_Admin/Masters/AdminUpdate_Documents";
import AdminDocumentSearch from "./Main_Admin/Masters/AdminDocumentSearch";
import Contactpage from './Contactpage';
import BackgroundPage from './Navbarr/BackgroundPage';
import Institutepage from './Navbarr/Institutepage';
import PromotingSociety from './Navbarr/PromotingSociety';
import VisionMission from './Navbarr/VisionMission';
import CoreValues from './Navbarr/CoreValues';
import BestPractices from './Navbarr/BestPractices';
import EntranceExamAlert from './Navbarr/Examination/EntranceExamAlert';
import ExamNotifications from './Navbarr/Examination/ExamNotifications';
import Result from './Navbarr/Examination/Result';
import ExamSchedule from './Navbarr/Examination/ExamSchedule';
import Interface from './Navbarr/Examination/Interface';
import PhdPage from './Navbarr/Academic/PhdPage';
import AcademicCalendar from './Navbarr/Academic/AcademicCalendar';
import Scholarship from './Navbarr/Academic/Scholarship';
import ConstituentUnits from './Navbarr/Academic/ConstituentUnits';
import HEIHandbook from './Navbarr/Academic/HEIHandbook';
import MandatoryDisclosures from './Navbarr/Academic/MandatoryDisclosures';
import Director from './Navbarr/Research/Director';
import RDCell from './Navbarr/Research/RDCell';
import ConsultancyServices from './Navbarr/Research/ConsultancyServices';
import TotalFeePaidHod from "./Main_Admin/Masters/TotalFeePaidHod";
import AdminPenSearch from "./Main_Admin/Masters/AdminPenSearch.jsx";
import AdminVeriStdSearch from "./Main_Admin/AdminVerified_Std_Search.jsx";
import Chancellor from "./Navbarr/UniversityOfficeal/Chancellor.jsx";
import ViceChancellorr from "./Navbarr/UniversityOfficeal/ViceChancellorr.jsx";
import Registrar from "./Navbarr/UniversityOfficeal/Registrar.jsx";
import DeputyRegistrar from "./Navbarr/UniversityOfficeal/DeputyRegistrar.jsx";
import SearchPen from "./Main_Admin/Masters/SearchPen.jsx";
import SearchVer from "./Main_Admin/Masters/SearchVer.jsx";
import Admissionstatus from "./Main_Admin/Masters/Admissionstatus.jsx";
import Adminser from "./Main_Admin/Masters/Adminser.jsx"
import ManualEnrol_G from "./Main_Admin/Masters/ManualEnrol_G.jsx";
import Paym from "./Main_Admin/Masters/Admin_Dashboard/Paym.jsx";
import Paymen from "./Main_Admin/Masters/Admin_Dashboard/Paymen.jsx";
import TermsConditions from "./HomePage/Footer/TermsConditions.jsx";
import PrivacyPolicy from "./HomePage/Footer/PrivacyPolicy.jsx";
import RefoundCancellation from "./HomePage/Footer/RefoundCancellation.jsx";
import Admission_Slip from "./Main_Admin/Masters/Admission_Slip.jsx"
import Admission_Slip_Search from "./Main_Admin/Masters/Admission_Slip_Search.jsx";
import { useNavigate } from "react-router-dom";
import NIRF_Eng from "./HomePage/NIRF_Eng.jsx";
import NIRF_Agri from "./HomePage/NIRF_Agri.jsx";
import NIRF_Phar from "./HomePage/NIRF_Phr.jsx";


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  function isAuthenticated() {
    const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
    const hodData = JSON.parse(sessionStorage.getItem("currentUser"));
    const AdminData = JSON.parse(sessionStorage.getItem("Admin"));
    if (userData || hodData || AdminData) {
      return true
    }
    return false;
    // const accessToken = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("access-token="));
    // return accessToken ? true : false;
  }
  function PrivateRoute({ element, ...rest }) {
    if (isAuthenticated()) {
      return element;
    } else {
      return <Navigate to={`/erp`} />;
    }
  }
  useEffect(() => {
    console.log("Location changed:", location.pathname);
  }, [location]);
  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      sessionStorage.clear();
      navigate('/erp');
    }, 20 * 60 * 1000);
    return () => clearTimeout(logoutTimer);
  }, []);

  return (
    <>
      <Routes>

        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refound-cancellation" element={<RefoundCancellation />} />
        {/*------------------------Student Routes-----------------------------------------*/}
        <Route path="/erp/studentregister" element={<Signup />} />
        <Route path="/erp/studentlogin" element={<Signin />} />
        <Route path="/studentlogin/selectCourse" element={<PrivateRoute element={<Course />} />} />
        <Route path="/studentalldetail" element={<StudentAllDetail />} />
        <Route path='/onlyheader' element={<PrivateRoute element={<OnlyHeader />} />} />
        <Route path='/erp/studentDashboard' element={<PrivateRoute element={<StudentDashboard />} />} />
        <Route path='/studentWaiting' element={<StudentWaiting />} />
        <Route path='/studentDetail' element={<StudentMainDetails />} />
        <Route path='/studentHome' element={<StudentHome />} />
        <Route path='/student/Enrollement/Form' element={<PrivateRoute element={<EnrollementForm />} />} />
        <Route path='/studentpending' element={<Pending />} />
        <Route path='/studentverify' element={<StudentVerify />} />
        <Route path='/student/dashboard/home' element={<StudentDashboardHome />} />
        <Route path='/studentUpdateDetail' element={<Registrationn />} />

        <Route path='/PaymentPage' element={<PrivateRoute element={<PaymentPage />} />} />
        <Route path='/success' element={<Success />} />
        <Route path='/failure' element={<Failure />} />
        <Route path='/verifyDetailed' element={<PrivateRoute element={<VerifyDetailed />} />} />


        <Route path='/' element={<MainPage />} />
        <Route path='/erp' element={<Erp />} />

        <Route path="/notification" element={<Notification />} />
        <Route path="/imp" element={<Imp />} />
        <Route path="/off" element={<Off />} />
        <Route path="/not" element={<Not />} />
        <Route path="/exam" element={<Notice />} />
        <Route path="/eventss" element={<Edetails />} />

        {/*------------------------Hod Routes-----------------------------------------*/}

        <Route path='/erp/hodlogin' element={< HodSignin />} />
        <Route path='/erp/hodregister' element={<HodSignUp />} />

        <Route path='/totalenrolled' element={<TotalEnrolled />} />
        <Route path='/total/student/Registered' element={<TotalRegisStdtHod />} />
        <Route path='/total/student/branch' element={<TotalSession />} />
        <Route path='/total/student/feepaid' element={<TotalFeePaidHod />} />

        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/studentverifieddetailed/:id" element={<PrivateRoute element={<VerifyDetailed />} />} />
        <Route path='/hodDashboard' element={<PrivateRoute element={<HodDashboard />} />} />
        <Route path='/hodDetail' element={<PrivateRoute element={<HodMainDetails />} />} />


        {/*------------------------Admin Routes-----------------------------------------*/}

 

        <Route path='/adminlogin' element={< AdminLogin />} />

        <Route path='/admindashboard' element={<PrivateRoute element={< AdminDashboard />} />} />

        <Route path="/admin/erpdasboard" element={<PrivateRoute element={<ErpDashboard />} />} />
  
        <Route path='/student/totalfeepaid' element={<PrivateRoute element={< TotalFeePaid />} />} />
        <Route path='/student/totalenrolled' element={<PrivateRoute element={< TotalEnrolledAdmin />} />} />
        <Route path='/student/totalregistered' element={<PrivateRoute element={< TotalRegistered />} />} />
        <Route path='/registered/studentlist' element={<PrivateRoute element={< StudentRegistrationList />} />} />

        <Route path='/erpdashboard/student/updatedetails' element={<PrivateRoute element={<AdminUpdtStdt_Detail />} />} />
        <Route path="/erpdashboard/student/updatealldetails/:id" element={<PrivateRoute element={<AdminUpdateAllDetail />} />} />
        <Route path="/erpdashboard/student/search" element={<PrivateRoute element={<AdminStdtSearch />} />} />

        <Route path="/erpdashboard/pending/student/search" element={<PrivateRoute element={<AdminPenSearch />} />} />
        <Route path="/search/:admissionSession/:courseType/:courseName/:courseBranch" element={<PrivateRoute element={<SearchPen />} />} />
        <Route path="/searchver/:admissionSession/:courseType/:courseName/:courseBranch" element={<PrivateRoute element={<SearchVer />} />} />
        <Route path="/sea/:admissionSession/:courseType/:courseName/:courseBranch" element={<PrivateRoute element={<Adminser />} />} />
        <Route path="/student/status" element={<PrivateRoute element={<Admissionstatus />} />} />
        <Route path="/erpdashboard/verified/student/search" element={<PrivateRoute element={<AdminVeriStdSearch />} />} />

        <Route path="/erpdashboard/student/document/search" element={<PrivateRoute element={<AdminDocumentSearch />} />} />
        <Route path="/erpdashboard/student/updatedocuments/:id" element={<PrivateRoute element={<AdminUpdate_Documents />} />} />

        <Route path="/admin/search/student-pending/list" element={<PrivateRoute element={<Admin_Pending />} />} />


        <Route path="/enrollment" element={<PrivateRoute element={<EnrollementG />} />} />
        <Route path="/manual/enrollment/generation" element={<ManualEnrol_G />} />

        <Route path="/admin/erpdashboard/admissionslip/search" element={<PrivateRoute element={<Admission_Slip_Search />} />} />
        <Route path="/admissionslip/:session/:courseType/:course/:branch/:college" element={<PrivateRoute element={<Admission_Slip />} />} />

        <Route path="/search-result/:session/:courseType/:course/:branch/:college" element={<PrivateRoute element={<Search />} />} />
        <Route path="/enrolled/student/list/:session/:courseType/:course/:branch/:college" element={<PrivateRoute element={<EnrolledStudentlist />} />} />
        <Route path="/enrolled/student/search-result" element={<PrivateRoute element={<EnrollementStudentSearch />} />} />
        <Route path="/brancmapping-session" element={<Branchmapping />} />
        <Route path="/center-master" element={<Centermaster />} />
        <Route path="/specialization-master" element={<SpecializationMaster />} />
        <Route path="/specialization-subject-mapping" element={<SpecializationSubjectMapping />} />
        <Route path="/sprcialization-type-master" element={<SpecializationTypeMaster />} />
        <Route path="/subject-header-insert" element={<SubjectHeaderInsert />} />
        <Route path="/upload-subject-master-from-excel-data" element={<UploadSubjectMasterFromExcelData />} />
        <Route path="/create-collage" element={<CreateCollege />} />

        <Route path="/admission-session-update" element={<AdmissionSessionMaster />} />
        <Route path="/faculty-master" element={<FacultyMaster />} />
        <Route path="/department-master" element={<DepartmentMaster />} />
        <Route path="/course-type" element={<CourseType />} />
        <Route path="/course-master" element={<CourseMaster />} />
        <Route path="/branch-master" element={<BranchMaster />} />
        <Route path="/sub-branch-master" element={<SubBranchMaster />} />
        <Route path="/course-group-master" element={<CourseGroupMaster />} />
        <Route path="/admission-open" element={<AdmissionOpen />} />
        <Route path="/reservation-master" element={<ReservationMaster />} />
        <Route path="/create-counselling-round" element={<CreateCounsellingRound />} />
        <Route path="/last-exam-sunject-group" element={<LastExamSubjectGroup />} />
        <Route path="/grade-point-master" element={<GradePointMaster />} />
        <Route path="/subject-master-excel-download" element={<SubjectMasterExcelDownload />} />
        <Route path="/subject-master-paper-wise" element={<SubjectMasterPaperWise />} />
        <Route path="/subject-group-master" element={<SubGroupMaster />} />
        <Route path="/transfer-subject" element={<TransferSubject />} />
        <Route path="/transfer-subject-group" element={<TransferSubjectGroup />} />
        <Route path="/program-scheduling" element={<ProgramScheduling />} />



        <Route path="/paym" element={<PrivateRoute element={<Paym />} />} />
        <Route path="/paymen" element={<PrivateRoute element={<Paymen />} />} />



        {/* ======================================================= */}
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/Nirf/Engenerring" element={<NIRF_Eng />} />
        <Route path="/Nirf/Agriculter" element={<NIRF_Agri />} />
        <Route path="/Nirf/Pharamacy" element={<NIRF_Phar />} />
       
        <Route path="/background-page" element={<BackgroundPage />} />
        <Route path="/institutes" element={<Institutepage />} />
        <Route path="/promoting-society" element={<PromotingSociety />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/core-values" element={<CoreValues />} />
        <Route path="/best-practicess" element={<BestPractices />} />

        <Route path="/chancellor" element={<Chancellor />} />
        <Route path="/vice-chancellor" element={<ViceChancellorr />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/deputy-registrar" element={<DeputyRegistrar />} />


        {/* ======================== Examination =============================== */}
        <Route path="/entrance-exam-alert" element={<EntranceExamAlert />} />
        <Route path="/exam-notifications" element={<ExamNotifications />} />
        <Route path="/exam-schedule" element={<ExamSchedule />} />
        <Route path="/interface" element={<Interface />} />
        <Route path="/result" element={<Result />} />


        {/* ========================= Academic  =========================================== */}

        <Route path="/phd-page" element={<PhdPage />} />
        <Route path="/academic-calender" element={<AcademicCalendar />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/constituent-units" element={<ConstituentUnits />} />
        <Route path="/Hei-handbook" element={<HEIHandbook />} />
        <Route path="/constituent-units" element={<ConstituentUnits />} />
        <Route path="/constituent-units" element={<ConstituentUnits />} />
        <Route path="/mandatory-discIosures" element={<MandatoryDisclosures />} />

        {/* ========================= Research ============================================ */}

        <Route path="/director(R&D)" element={<Director />} />
        <Route path="/R&D-cell" element={<RDCell />} />
        <Route path="/consultancy-services" element={<ConsultancyServices />} />


      </Routes >
    </>

  )
}

export default App