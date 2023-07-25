import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./auth/registerSlice";
import eligibilityReducer from "./auth/eligibilitySlice"
import loginReducer from "./auth/loginSlice";
import logoutReducer from "./auth/logoutSlice";
import getAllProjectsWithStatusReducer from "./admin/projects/AllProjectWithStatusSlice";
import profileReducer from "../redux/client/common/profileSlice";
import getAllProjectsReducer from "../redux/client/dashboard/allProjectSlice";
import getAllProjectsAdminReducer from "../redux/admin/dashboard/allProjectSlice";
import countReducer from "../redux/client/dashboard/countSlice";
import countAdminReducer from "../redux/admin/dashboard/countSlice";
import createProjectReducer from "../redux/client/project/createProjectSlice";
import getProjectByIdReducer from "../redux/client/project/projectByIdSlice";
import getProjectStatusReducer from "../redux/client/project/projectProcessStatusSlice";
import favouriteProjectReducer from "../redux/client/project/favouriteProjectSlice";
import getErrorsListReducer from "./admin/errors/allErrorListSlice";
import getTeamListReducer from "./admin/team/allTeamListSlice";
import teamMemberReducer from "./admin/team/teamMemberSlice";
import removeTeamMemberReducer from "./admin/team/removeTeamMemberSlice";
import addTeamMemberReducer from "./admin/team/addTeamMemberSlice";
import createTeamMemberReducer from "./admin/team/createTeamMemberSlice";
import createTeamReducer from "./admin/team/createTeamSlice";
import TeamMemberByTeamIdReducer from "./admin/team/createTeamMemberSlice";
import adminLoginReducer from "./admin/auth/loginSlice";
import snackbarReducer from "./client/common/snackbarSlice";
import allUsersPlanListReducer from "./admin/users/allUsersPlanListSlice";
import createPlanReducer from "./admin/plan/createPlanSlice";
import processUpdateReducer from "./admin/projects/processUpdateSlice";
import markAsAdminReducer from "./admin/team/markAsAdminSlice";
import assignProjectReducer from "./admin/projects/assignProjectSlice";
import notificationReducer from "./admin/notification/notificationSlice";
import supportReducer from "./support/supportSlice";
import createGroupReducer from "./group/createGroupSlice";
import getGroupListReducer from "./group/getGroupSlice";

export default configureStore({
    reducer: {
        register: registerReducer,
        eligibility: eligibilityReducer,
        login: loginReducer,
        adminLogin: adminLoginReducer,
        logout: logoutReducer,
        count: countReducer,
        countAdmin: countAdminReducer,
        createProject: createProjectReducer,
        getProjectById: getProjectByIdReducer,
        getAllProjects: getAllProjectsReducer,
        getAllProjectsAdmin: getAllProjectsAdminReducer,
        profile: profileReducer,
        projectStatus: getProjectStatusReducer,
        favourite: favouriteProjectReducer,
        errorList: getErrorsListReducer,
        getTeamList: getTeamListReducer,
        getTeamMember: teamMemberReducer,
        removeTeamMember: removeTeamMemberReducer,
        addTeamMember: addTeamMemberReducer,
        createTeamMember: createTeamMemberReducer,
        teamMembersByTeamId: TeamMemberByTeamIdReducer,
        getallPlanUserList: allUsersPlanListReducer,
        snackbar: snackbarReducer,
        createTeam: createTeamReducer,
        createPlan: createPlanReducer,
        allProjectWithStatus: getAllProjectsWithStatusReducer,
        updateProcessStatus: processUpdateReducer,
        markAsAdmin: markAsAdminReducer,
        assignProject: assignProjectReducer,
        notification: notificationReducer,
        support: supportReducer,
        createGroup:createGroupReducer,
        getGroupList:getGroupListReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
    })
})
