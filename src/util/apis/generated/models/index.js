/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

exports.GetInAppUpdateTokenResponse = require('./getInAppUpdateTokenResponse');
exports.ApiTokensCreateResponse = require('./apiTokensCreateResponse');
exports.ApiTokensCreateRequest = require('./apiTokensCreateRequest');
exports.ApiTokensGetResponse = require('./apiTokensGetResponse');
exports.Status = require('./status');
exports.Failure = require('./failure');
exports.ErrorResponse = require('./errorResponse');
exports.ErrorDetails = require('./errorDetails');
exports.SuccessResponse = require('./successResponse');
exports.ApiTokensPostRequest = require('./apiTokensPostRequest');
exports.AppPatchRequest = require('./appPatchRequest');
exports.AppPrivatePatchRequest = require('./appPrivatePatchRequest');
exports.AppRepoPatchRequest = require('./appRepoPatchRequest');
exports.AppRepoPostRequest = require('./appRepoPostRequest');
exports.AppRequest = require('./appRequest');
exports.DistributionGroupPatchRequest = require('./distributionGroupPatchRequest');
exports.DistributionGroupRequest = require('./distributionGroupRequest');
exports.DistributionGroupUserRequest = require('./distributionGroupUserRequest');
exports.EmailVerificationRequest = require('./emailVerificationRequest');
exports.ExternalUserRequest = require('./externalUserRequest');
exports.FeaturePatchRequest = require('./featurePatchRequest');
exports.FeatureCreateRequest = require('./featureCreateRequest');
exports.GrantAdminRoleRequest = require('./grantAdminRoleRequest');
exports.InternalUserRequest = require('./internalUserRequest');
exports.OrganizationPatchRequest = require('./organizationPatchRequest');
exports.OrganizationRequest = require('./organizationRequest');
exports.OrganizationUserPatchRequest = require('./organizationUserPatchRequest');
exports.PasswordUpdateRequest = require('./passwordUpdateRequest');
exports.ResendVerificationRequest = require('./resendVerificationRequest');
exports.ResetPasswordUsingTokenRequest = require('./resetPasswordUsingTokenRequest');
exports.UserAppPermissionsUpdateRequest = require('./userAppPermissionsUpdateRequest');
exports.UserInvitationPermissionsUpdateRequest = require('./userInvitationPermissionsUpdateRequest');
exports.UserEmailRequest = require('./userEmailRequest');
exports.UserNameUpdateRequest = require('./userNameUpdateRequest');
exports.UserUpdateRequest = require('./userUpdateRequest');
exports.UserUpdateRequestInternal = require('./userUpdateRequestInternal');
exports.ApiTokenDeleteResponse = require('./apiTokenDeleteResponse');
exports.ApiTokenGetUserResponse = require('./apiTokenGetUserResponse');
exports.ApiTokenResponse = require('./apiTokenResponse');
exports.AppGroupResponse = require('./appGroupResponse');
exports.AppInvitationDetailResponse = require('./appInvitationDetailResponse');
exports.AppResponse = require('./appResponse');
exports.Owner = require('./owner');
exports.UserProfileResponse = require('./userProfileResponse');
exports.AppPrivatePatchResponse = require('./appPrivatePatchResponse');
exports.AppRepoResponse = require('./appRepoResponse');
exports.AppResponseInternal = require('./appResponseInternal');
exports.AppResponseInternalRepositoriesItem = require('./appResponseInternalRepositoriesItem');
exports.AppUserPermissionResponse = require('./appUserPermissionResponse');
exports.DistributionGroupResponse = require('./distributionGroupResponse');
exports.DistributionGroupUserDeleteResponse = require('./distributionGroupUserDeleteResponse');
exports.DistributionGroupUserGetResponse = require('./distributionGroupUserGetResponse');
exports.DistributionGroupUserPostResponse = require('./distributionGroupUserPostResponse');
exports.DistributionGroupWithUsersResponse = require('./distributionGroupWithUsersResponse');
exports.FeatureFlagsResponse = require('./featureFlagsResponse');
exports.FeatureResponse = require('./featureResponse');
exports.InternalUserSignupResponse = require('./internalUserSignupResponse');
exports.OrgNameAvailabilityResponse = require('./orgNameAvailabilityResponse');
exports.OrganizationInvitationDetailResponse = require('./organizationInvitationDetailResponse');
exports.OrganizationResponse = require('./organizationResponse');
exports.OrganizationInvitationSimpleDetailResponse = require('./organizationInvitationSimpleDetailResponse');
exports.OrganizationUserResponse = require('./organizationUserResponse');
exports.StatusResponse = require('./statusResponse');
exports.UserAuthResponse = require('./userAuthResponse');
exports.UserNameAvailabilityResponse = require('./userNameAvailabilityResponse');
exports.UserProfileResponseInternal = require('./userProfileResponseInternal');
exports.SourceRepository = require('./sourceRepository');
exports.DownloadContainer = require('./downloadContainer');
exports.WebSocketContainer = require('./webSocketContainer');
exports.XcodeScheme = require('./xcodeScheme');
exports.XcodeSchemeContainer = require('./xcodeSchemeContainer');
exports.XamarinSolution = require('./xamarinSolution');
exports.AndroidProject = require('./androidProject');
exports.AndroidModule = require('./androidModule');
exports.ToolsetProjects = require('./toolsetProjects');
exports.BranchStatus = require('./branchStatus');
exports.Build = require('./build');
exports.BranchProperties = require('./branchProperties');
exports.Branch = require('./branch');
exports.Commit = require('./commit');
exports.BranchConfiguration = require('./branchConfiguration');
exports.BranchConfigurationToolsets = require('./branchConfigurationToolsets');
exports.XcodeBranchConfigurationProperties = require('./xcodeBranchConfigurationProperties');
exports.JavaScriptBranchConfigurationProperties = require('./javaScriptBranchConfigurationProperties');
exports.XamarinBranchConfigurationProperties = require('./xamarinBranchConfigurationProperties');
exports.AndroidBranchConfigurationProperties = require('./androidBranchConfigurationProperties');
exports.CommitDetails = require('./commitDetails');
exports.CommitDetailsCommit = require('./commitDetailsCommit');
exports.CommitDetailsCommitAuthor = require('./commitDetailsCommitAuthor');
exports.RepoConfig = require('./repoConfig');
exports.RepoInfo = require('./repoInfo');
exports.XcodeVersion = require('./xcodeVersion');
exports.BuildParams = require('./buildParams');
exports.BuildPatch = require('./buildPatch');
exports.BuildLog = require('./buildLog');
exports.DistributionRequest = require('./distributionRequest');
exports.DistributionResponse = require('./distributionResponse');
exports.BuildServiceStatus = require('./buildServiceStatus');
exports.ValidationErrorResponse = require('./validationErrorResponse');
exports.PrivateReleaseDetails = require('./privateReleaseDetails');
exports.PrivateBasicReleaseDetails = require('./privateBasicReleaseDetails');
exports.BasicReleaseDetails = require('./basicReleaseDetails');
exports.DistributionGroup = require('./distributionGroup');
exports.DistributionStore = require('./distributionStore');
exports.ReleaseDetails = require('./releaseDetails');
exports.DistributionGroupWithoutIsLatest = require('./distributionGroupWithoutIsLatest');
exports.DistributionStoreWithoutIsLatest = require('./distributionStoreWithoutIsLatest');
exports.ReleaseUploadBeginResponse = require('./releaseUploadBeginResponse');
exports.ReleaseUploadEndRequest = require('./releaseUploadEndRequest');
exports.ReleaseUploadEndResponse = require('./releaseUploadEndResponse');
exports.ReleaseUpdateRequest = require('./releaseUpdateRequest');
exports.PrivateReleaseUpdateRequest = require('./privateReleaseUpdateRequest');
exports.RereleaseRequest = require('./rereleaseRequest');
exports.DevicesResponse = require('./devicesResponse');
exports.DeviceConfigurationResponse = require('./deviceConfigurationResponse');
exports.DeviceInfoRequest = require('./deviceInfoRequest');
exports.DeviceInfoResponse = require('./deviceInfoResponse');
exports.StoresReleaseDetails = require('./storesReleaseDetails');
exports.ExternalStoreRequest = require('./externalStoreRequest');
exports.IntuneStoreRequest = require('./intuneStoreRequest');
exports.IntuneSecretDetails = require('./intuneSecretDetails');
exports.GooglePlayStoreRequest = require('./googlePlayStoreRequest');
exports.ExternalStoreResponse = require('./externalStoreResponse');
exports.StoreSecretResponse = require('./storeSecretResponse');
exports.IntuneStoreResponse = require('./intuneStoreResponse');
exports.PatchReleaseRequest = require('./patchReleaseRequest');
exports.StoresBasicReleaseDetails = require('./storesBasicReleaseDetails');
exports.StoresDetails = require('./storesDetails');
exports.StoreDestinationDetails = require('./storeDestinationDetails');
exports.StoresBasicDetails = require('./storesBasicDetails');
exports.AppIdMasterRequest = require('./appIdMasterRequest');
exports.Symbol = require('./symbol');
exports.SymbolStatusResponse = require('./symbolStatusResponse');
exports.SymbolUpload = require('./symbolUpload');
exports.SymbolUploadBeginRequest = require('./symbolUploadBeginRequest');
exports.SymbolUploadBeginResponse = require('./symbolUploadBeginResponse');
exports.SymbolUploadEndRequest = require('./symbolUploadEndRequest');
exports.AppCrashesInfo = require('./appCrashesInfo');
exports.AppFeatures = require('./appFeatures');
exports.AppVersion = require('./appVersion');
exports.Exception = require('./exception');
exports.StackFrame = require('./stackFrame');
exports.Stacktrace = require('./stacktrace');
exports.Thread = require('./thread');
exports.ReasonStackFrame = require('./reasonStackFrame');
exports.CrashAttachment = require('./crashAttachment');
exports.CrashRawUrl = require('./crashRawUrl');
exports.CrashGroup = require('./crashGroup');
exports.CrashGroupChange = require('./crashGroupChange');
exports.CrashGroupCounts = require('./crashGroupCounts');
exports.Crash = require('./crash');
exports.MissingSymbol = require('./missingSymbol');
exports.CrashLocation = require('./crashLocation');
exports.ParkedCrash = require('./parkedCrash');
exports.SymbolUpdateInfo = require('./symbolUpdateInfo');
exports.MissingSymbolCrashGroup = require('./missingSymbolCrashGroup');
exports.MissingSymbolCrashGroupsResponse = require('./missingSymbolCrashGroupsResponse');
exports.FailureResponse = require('./failureResponse');
exports.SearchItemsRequest = require('./searchItemsRequest');
exports.SearchItem = require('./searchItem');
exports.CrashCounts = require('./crashCounts');
exports.DateTimeCounts = require('./dateTimeCounts');
exports.ActiveDeviceCounts = require('./activeDeviceCounts');
exports.Places = require('./places');
exports.Place = require('./place');
exports.ErrorModel = require('./errorModel');
exports.ErrorError = require('./errorError');
exports.SessionDurationsDistribution = require('./sessionDurationsDistribution');
exports.SessionDurationsDistributionDistributionItem = require('./sessionDurationsDistributionDistributionItem');
exports.Versions = require('./versions');
exports.Version = require('./version');
exports.SessionCounts = require('./sessionCounts');
exports.SessionsPerDevice = require('./sessionsPerDevice');
exports.SessionsPerDeviceSessionsPerUserItem = require('./sessionsPerDeviceSessionsPerUserItem');
exports.AnalyticsModels = require('./analyticsModels');
exports.Model = require('./model');
exports.Languages = require('./languages');
exports.Language = require('./language');
exports.OSes = require('./oSes');
exports.OS = require('./os');
exports.DateTimeDecimalCounts = require('./dateTimeDecimalCounts');
exports.AvailableVersions = require('./availableVersions');
exports.CrashFreeDevicePercentages = require('./crashFreeDevicePercentages');
exports.DateTimePercentages = require('./dateTimePercentages');
exports.CrashesOverallItem = require('./crashesOverallItem');
exports.CrashOverall = require('./crashOverall');
exports.CrashGroupModels = require('./crashGroupModels');
exports.CrashGroupModel = require('./crashGroupModel');
exports.CrashGroupOperatingSystems = require('./crashGroupOperatingSystems');
exports.CrashGroupOperatingSystem = require('./crashGroupOperatingSystem');
exports.CrashGroupContainer = require('./crashGroupContainer');
exports.CrashGroupAndVersion = require('./crashGroupAndVersion');
exports.Events = require('./events');
exports.Event = require('./event');
exports.EventCount = require('./eventCount');
exports.EventDeviceCount = require('./eventDeviceCount');
exports.EventCountPerDevice = require('./eventCountPerDevice');
exports.EventCountPerSession = require('./eventCountPerSession');
exports.LogContainer = require('./logContainer');
exports.Log = require('./log');
exports.Device = require('./device');
exports.LogWithProperties = require('./logWithProperties');
exports.StartSessionLog = require('./startSessionLog');
exports.PageLog = require('./pageLog');
exports.EventLog = require('./eventLog');
exports.PushInstallationLog = require('./pushInstallationLog');
exports.ErrorLog = require('./errorLog');
exports.EventProperties = require('./eventProperties');
exports.EventPropertyValues = require('./eventPropertyValues');
exports.EventPropertyValue = require('./eventPropertyValue');
exports.AudienceListResult = require('./audienceListResult');
exports.AudienceSummary = require('./audienceSummary');
exports.Audience = require('./audience');
exports.AudienceTestResult = require('./audienceTestResult');
exports.AudienceDefinition = require('./audienceDefinition');
exports.AudienceBlobResult = require('./audienceBlobResult');
exports.AudienceDevicePropertiesListResult = require('./audienceDevicePropertiesListResult');
exports.AudienceDevicePropertyValuesListResult = require('./audienceDevicePropertyValuesListResult');
exports.NotificationsListResult = require('./notificationsListResult');
exports.NotificationDefinition = require('./notificationDefinition');
exports.NotificationDetailsResult = require('./notificationDetailsResult');
exports.NotificationTarget = require('./notificationTarget');
exports.NotificationContent = require('./notificationContent');
exports.NotificationSendSucceededResult = require('./notificationSendSucceededResult');
exports.NotificationTargetAudiences = require('./notificationTargetAudiences');
exports.NotificationTargetUsers = require('./notificationTargetUsers');
exports.NotificationTargetDevices = require('./notificationTargetDevices');
exports.NotificationConfig = require('./notificationConfig');
exports.NotificationConfigApple = require('./notificationConfigApple');
exports.NotificationConfigAppleToken = require('./notificationConfigAppleToken');
exports.NotificationConfigGoogle = require('./notificationConfigGoogle');
exports.NotificationConfigWindows = require('./notificationConfigWindows');
exports.NotificationConfigResult = require('./notificationConfigResult');
exports.NotificationConfigAppleResult = require('./notificationConfigAppleResult');
exports.NotificationConfigAppleTokenResult = require('./notificationConfigAppleTokenResult');
exports.NotificationConfigGoogleResult = require('./notificationConfigGoogleResult');
exports.NotificationConfigWindowsResult = require('./notificationConfigWindowsResult');
exports.DeviceConfiguration = require('./deviceConfiguration');
exports.DeviceConfigurationImage = require('./deviceConfigurationImage');
exports.DeviceModel = require('./deviceModel');
exports.DeviceDimensions = require('./deviceDimensions');
exports.DeviceResolution = require('./deviceResolution');
exports.DeviceScreenSize = require('./deviceScreenSize');
exports.DeviceCpu = require('./deviceCpu');
exports.DeviceMemory = require('./deviceMemory');
exports.DeviceFrame = require('./deviceFrame');
exports.DeviceFrameDefinition = require('./deviceFrameDefinition');
exports.DeviceSetConfiguration = require('./deviceSetConfiguration');
exports.DeviceSetConfigurationImage = require('./deviceSetConfigurationImage');
exports.DeviceSetModel = require('./deviceSetModel');
exports.TestRun = require('./testRun');
exports.TestRunStatistics = require('./testRunStatistics');
exports.TestSeries = require('./testSeries');
exports.TestRunSummary = require('./testRunSummary');
exports.DeviceSelection = require('./deviceSelection');
exports.DeviceSet = require('./deviceSet');
exports.DeviceSetOwner = require('./deviceSetOwner');
exports.Subscription = require('./subscription');
exports.Tier = require('./tier');
exports.TestReport = require('./testReport');
exports.TestReportStats = require('./testReportStats');
exports.TestReportFeaturesItem = require('./testReportFeaturesItem');
exports.TestReportFeaturesItemTestsItem = require('./testReportFeaturesItemTestsItem');
exports.TestReportFeaturesItemTestsItemRunsItem = require('./testReportFeaturesItemTestsItemRunsItem');
exports.TestReportFeaturesItemTestsItemRunsItemStepsItem = require('./testReportFeaturesItemTestsItemRunsItemStepsItem');
exports.TestReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem = require('./testReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem');
exports.TestReportDeviceLogsItem = require('./testReportDeviceLogsItem');
exports.StepReport = require('./stepReport');
exports.StepReportDeviceScreenshotsItem = require('./stepReportDeviceScreenshotsItem');
exports.StepReportDeviceScreenshotsItemScreenshot = require('./stepReportDeviceScreenshotsItemScreenshot');
exports.StepReportDeviceScreenshotsItemScreenshotUrls = require('./stepReportDeviceScreenshotsItemScreenshotUrls');
exports.TestCloudErrorDetails = require('./testCloudErrorDetails');
exports.TestCloudFileHashDeprecated = require('./testCloudFileHashDeprecated');
exports.TestCloudFileHash = require('./testCloudFileHash');
exports.TestCloudFileHashResponse = require('./testCloudFileHashResponse');
exports.TestCloudHashUploadStatus = require('./testCloudHashUploadStatus');
exports.TestCloudStartTestRunOptions = require('./testCloudStartTestRunOptions');
exports.TestCloudStartTestRunResult = require('./testCloudStartTestRunResult');
exports.TestRunState = require('./testRunState');
exports.PerformanceReport = require('./performanceReport');
exports.PerformanceReportPerformanceData = require('./performanceReportPerformanceData');
exports.PerformanceReportPerformanceDataStepsItem = require('./performanceReportPerformanceDataStepsItem');
exports.PerformanceReportPerformanceDataStepsItemSamplesItem = require('./performanceReportPerformanceDataStepsItemSamplesItem');
exports.PerformanceReportVideo = require('./performanceReportVideo');
exports.PerformanceReportVideoVideoMetadata = require('./performanceReportVideoVideoMetadata');
exports.PerformanceReportVideoVideoMetadataEventsItem = require('./performanceReportVideoVideoMetadataEventsItem');
exports.Permission = require('./permission');
exports.Table = require('./table');
exports.TableColumn = require('./tableColumn');
exports.ImportDataContainer = require('./importDataContainer');
exports.Deployment = require('./deployment');
exports.LiveUpdateRelease = require('./liveUpdateRelease');
exports.DeploymentModification = require('./deploymentModification');
exports.LiveUpdateReleaseModification = require('./liveUpdateReleaseModification');
exports.LiveUpdateReleaseMetric = require('./liveUpdateReleaseMetric');
exports.LiveUpdateStatusMetricMetadata = require('./liveUpdateStatusMetricMetadata');
exports.AlertEmailSettings = require('./alertEmailSettings');
exports.EventSetting = require('./eventSetting');
exports.AlertUserEmailSettingsResult = require('./alertUserEmailSettingsResult');
exports.AlertUserAppEmailSettingsResult = require('./alertUserAppEmailSettingsResult');
exports.AlertingEvent = require('./alertingEvent');
exports.EventResponseResult = require('./eventResponseResult');
exports.AlertingError = require('./alertingError');
exports.AlertingErrorError = require('./alertingErrorError');
exports.App = require('./app');
exports.ListOKResponseItem = require('./listOKResponseItem');
exports.CrashGroups = require('./crashGroups');
exports.discriminators = {
  'Log' : exports.Log,
  'Log.LogWithProperties' : exports.LogWithProperties,
  'Log.start_session' : exports.StartSessionLog,
  'Log.page' : exports.PageLog,
  'Log.event' : exports.EventLog,
  'Log.push_installation' : exports.PushInstallationLog,
  'Log.error' : exports.ErrorLog,
  'NotificationTarget' : exports.NotificationTarget,
  'NotificationTarget.audiences_target' : exports.NotificationTargetAudiences,
  'NotificationTarget.users_target' : exports.NotificationTargetUsers,
  'NotificationTarget.devices_target' : exports.NotificationTargetDevices,
  'NotificationConfig' : exports.NotificationConfig,
  'NotificationConfig.apns_config' : exports.NotificationConfigApple,
  'NotificationConfig.apns_token_config' : exports.NotificationConfigAppleToken,
  'NotificationConfig.gcm_config' : exports.NotificationConfigGoogle,
  'NotificationConfig.wns_config' : exports.NotificationConfigWindows,
  'NotificationConfigResult' : exports.NotificationConfigResult,
  'NotificationConfigResult.apns_config' : exports.NotificationConfigAppleResult,
  'NotificationConfigResult.apns_token_config' : exports.NotificationConfigAppleTokenResult,
  'NotificationConfigResult.gcm_config' : exports.NotificationConfigGoogleResult,
  'NotificationConfigResult.wns_config' : exports.NotificationConfigWindowsResult
};
