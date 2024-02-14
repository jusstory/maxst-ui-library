import React from 'react';
import * as Icon from '@maxst-designsystem/icons';

function IconArea() {
  const iconDumm: any[] = [];
  const iconTest = () => {
    for (let i in Icon) {
      iconDumm.push(i);
    }
  };
  iconTest();

  return (
    <div className="icon-library-area">
      {/* {iconDumm.map((i: any) => {
        return Icon[i]();
      })} */}
      <Icon.UserLineIcon />
      <Icon.UserLineBoldIcon />
      <Icon.UserLineLightIcon />
      <Icon.UserFillIcon />
      <Icon.UserAddLineIcon />
      <Icon.UserAddLineBoldIcon />
      <Icon.UserAddLineLightIcon />
      <Icon.UserAddFillIcon />
      <Icon.UserCheckLineIcon />
      <Icon.UserCheckLineBoldIcon />
      <Icon.UserCheckLineLightIcon />
      <Icon.UserCheckFillIcon />
      <Icon.UserGroupLineIcon />
      <Icon.UserGroupLineBoldIcon />
      <Icon.UserGroupLineLightIcon />
      <Icon.UserGroupFillIcon />
      <Icon.ProfileLineIcon />
      <Icon.ProfileLineBoldIcon />
      <Icon.ProfileLineLightIcon />
      <Icon.ProfileFillIcon />
      <Icon.SettingLineIcon />
      <Icon.SettingLineBoldIcon />
      <Icon.SettingLineLightIcon />
      <Icon.SettingFillIcon />
      <Icon.HomeLineIcon />
      <Icon.HomeLineBoldIcon />
      <Icon.HomeLineLightIcon />
      <Icon.HomeFillIcon />
      <Icon.SearchLineIcon />
      <Icon.SearchLineBoldIcon />
      <Icon.SearchLineLightIcon />
      <Icon.HeartLineIcon />
      <Icon.HeartLineBoldIcon />
      <Icon.HeartLineLightIcon />
      <Icon.HeartFillIcon />

      <Icon.StarLineIcon />
      <Icon.StarLineBoldIcon />
      <Icon.StarLineLightIcon />
      <Icon.StarFillIcon />

      <Icon.LockLineIcon />
      <Icon.LockLineBoldIcon />
      <Icon.LockLineLightIcon />
      <Icon.LockFillIcon />

      <Icon.LockOpenLineIcon />
      <Icon.LockOpenLineBoldIcon />
      <Icon.LockOpenLineLightIcon />
      <Icon.LockOpenFillIcon />

      <Icon.NotificationLineIcon />
      <Icon.NotificationLineBoldIcon />
      <Icon.NotificationLineLightIcon />
      <Icon.NotificationFillIcon />

      <Icon.NotificationOffLineIcon />
      <Icon.NotificationOffLineBoldIcon />
      <Icon.NotificationOffLineLightIcon />
      <Icon.NotificationOffFillIcon />

      <Icon.NotificationCheckLineIcon />
      <Icon.NotificationCheckLineBoldIcon />
      <Icon.NotificationCheckLineLightIcon />
      <Icon.NotificationCheckFillIcon />

      <Icon.NotificationCircleLineIcon />
      <Icon.NotificationCircleLineBoldIcon />
      <Icon.NotificationCircleLineLightIcon />
      <Icon.NotificationCircleFillIcon />

      <Icon.MessageLineIcon />
      <Icon.MessageLineBoldIcon />
      <Icon.MessageLineLightIcon />
      <Icon.MessageFillIcon />

      <Icon.MailLineIcon />
      <Icon.MailLineBoldIcon />
      <Icon.MailLineLightIcon />
      <Icon.MailFillIcon />

      <Icon.EditLineIcon />
      <Icon.EditLineBoldIcon />
      <Icon.EditLineLightIcon />
      <Icon.EditFillIcon />

      <Icon.DeleteLineIcon />
      <Icon.DeleteLineBoldIcon />
      <Icon.DeleteLineLightIcon />
      <Icon.DeleteFillIcon />

      <Icon.GridViewLineIcon />
      <Icon.GridViewLineBoldIcon />
      <Icon.GridViewLineLightIcon />
      <Icon.GridViewFillIcon />

      <Icon.TableViewLineIcon />
      <Icon.TableViewLineBoldIcon />
      <Icon.TableViewLineLightIcon />
      <Icon.TableViewFillIcon />

      <Icon.ListViewLineIcon />
      <Icon.ListViewLineBoldIcon />
      <Icon.ListViewLineLightIcon />
      <Icon.ListViewFillIcon />

      <Icon.ViewLineIcon />
      <Icon.ViewLineBoldIcon />
      <Icon.ViewLineLightIcon />
      <Icon.ViewFillIcon />

      <Icon.ViewOffLineIcon />
      <Icon.ViewOffLineBoldIcon />
      <Icon.ViewOffLineLightIcon />
      <Icon.ViewOffFillIcon />

      <Icon.RefreshLineIcon />
      <Icon.RefreshLineBoldIcon />
      <Icon.RefreshLineLightIcon />

      <Icon.SyncLineIcon />
      <Icon.SyncLineBoldIcon />
      <Icon.SyncLineLightIcon />

      <Icon.LanguageLineIcon />
      <Icon.LanguageLineBoldIcon />
      <Icon.LanguageLineLightIcon />
      <Icon.LanguageFillIcon />

      <Icon.LinkLineIcon />
      <Icon.LinkLineBoldIcon />
      <Icon.LinkLineLightIcon />

      <Icon.ShareLineIcon />
      <Icon.ShareLineBoldIcon />
      <Icon.ShareLineLightIcon />
      <Icon.ShareFillIcon />

      <Icon.TuneLineIcon />
      <Icon.TuneLineBoldIcon />
      <Icon.TuneLineLightIcon />
      <Icon.TuneFillIcon />

      <Icon.FilterLineIcon />
      <Icon.FilterLineBoldIcon />
      <Icon.FilterLineLightIcon />
      <Icon.FilterFillIcon />

      <Icon.FilterOffLineIcon />
      <Icon.FilterOffLineBoldIcon />
      <Icon.FilterOffLineLightIcon />
      <Icon.FilterOffFillIcon />

      <Icon.SortLineIcon />
      <Icon.SortLineBoldIcon />
      <Icon.SortLineLightIcon />

      <Icon.SortAtoZLineIcon />
      <Icon.SortAtoZLineBoldIcon />
      <Icon.SortAtoZLineLightIcon />

      <Icon.SortZtoALineIcon />
      <Icon.SortZtoALineBoldIcon />
      <Icon.SortZtoALineLightIcon />

      <Icon.FullScreenLineIcon />
      <Icon.FullScreenLineBoldIcon />
      <Icon.FullScreenLineLightIcon />

      <Icon.FullScreenOffLineIcon />
      <Icon.FullScreenOffLineBoldIcon />
      <Icon.FullScreenOffLineLightIcon />

      <Icon.LightModeLineIcon />
      <Icon.LightModeLineBoldIcon />
      <Icon.LightModeLineLightIcon />
      <Icon.LightModeFillIcon />

      <Icon.DarkModeLineIcon />
      <Icon.DarkModeLineBoldIcon />
      <Icon.DarkModeLineLightIcon />
      <Icon.DarkModeFillIcon />

      <Icon.PlayLineIcon />
      <Icon.PlayFillIcon />

      <Icon.PlayCircleLineIcon />
      <Icon.PlayCircleLineBoldIcon />
      <Icon.PlayCircleLineLightIcon />
      <Icon.PlayCircleFillIcon />

      <Icon.ArrowDownLineIcon />
      <Icon.ArrowDownLineBoldIcon />
      <Icon.ArrowDownLineLightIcon />

      <Icon.ArrowUpLineIcon />
      <Icon.ArrowUpLineBoldIcon />
      <Icon.ArrowUpLineLightIcon />

      <Icon.ArrowLeftLineIcon />
      <Icon.ArrowLeftLineBoldIcon />
      <Icon.ArrowLeftLineLightIcon />

      <Icon.ArrowRightLineIcon />
      <Icon.ArrowRightLineBoldIcon />
      <Icon.ArrowRightLineLightIcon />

      <Icon.ArrowDownwardLineIcon />
      <Icon.ArrowDownwardLineBoldIcon />
      <Icon.ArrowDownwardLineLightIcon />

      <Icon.ArrowUpwardLineIcon />
      <Icon.ArrowUpwardLineBoldIcon />
      <Icon.ArrowUpwardLineLightIcon />

      <Icon.ArrowBackwardLineIcon />
      <Icon.ArrowBackwardLineBoldIcon />
      <Icon.ArrowBackwardLineLightIcon />

      <Icon.ArrowForwardLineIcon />
      <Icon.ArrowForwardLineBoldIcon />
      <Icon.ArrowForwardLineLightIcon />

      <Icon.ArrowInwardLineIcon />
      <Icon.ArrowInwardLineBoldIcon />
      <Icon.ArrowInwardLineLightIcon />

      <Icon.ArrowOutwardLineIcon />
      <Icon.ArrowOutwardLineBoldIcon />
      <Icon.ArrowOutwardLineLightIcon />

      <Icon.ArrowDownCircleLineIcon />
      <Icon.ArrowDownCircleLineBoldIcon />
      <Icon.ArrowDownCircleLineLightIcon />
      <Icon.ArrowDownCircleFillIcon />

      <Icon.ArrowUpCircleLineIcon />
      <Icon.ArrowUpCircleLineBoldIcon />
      <Icon.ArrowUpCircleLineLightIcon />
      <Icon.ArrowUpCircleFillIcon />

      <Icon.ArrowLeftCircleLineIcon />
      <Icon.ArrowLeftCircleLineBoldIcon />
      <Icon.ArrowLeftCircleLineLightIcon />
      <Icon.ArrowLeftCircleFillIcon />

      <Icon.ArrowRightCircleLineIcon />
      <Icon.ArrowRightCircleLineBoldIcon />
      <Icon.ArrowRightCircleLineLightIcon />
      <Icon.ArrowRightCircleFillIcon />

      <Icon.ArrowDownwardCircleLineIcon />
      <Icon.ArrowDownwardCircleLineBoldIcon />
      <Icon.ArrowDownwardCircleLineLightIcon />
      <Icon.ArrowDownwardCircleFillIcon />

      <Icon.ArrowUpwardCircleLineIcon />
      <Icon.ArrowUpwardCircleLineBoldIcon />
      <Icon.ArrowUpwardCircleLineLightIcon />
      <Icon.ArrowUpwardCircleFillIcon />

      <Icon.ArrowBackwardCircleLineIcon />
      <Icon.ArrowBackwardCircleLineBoldIcon />
      <Icon.ArrowBackwardCircleLineLightIcon />
      <Icon.ArrowBackwardCircleFillIcon />

      <Icon.ArrowForwardCircleLineIcon />
      <Icon.ArrowForwardCircleLineBoldIcon />
      <Icon.ArrowForwardCircleLineLightIcon />
      <Icon.ArrowForwardCircleFillIcon />

      <Icon.FirstPageLineIcon />
      <Icon.FirstPageLineBoldIcon />
      <Icon.FirstPageLineLightIcon />

      <Icon.LastPageLineIcon />
      <Icon.LastPageLineBoldIcon />
      <Icon.LastPageLineLightIcon />

      <Icon.OpenInNewLineIcon />
      <Icon.OpenInNewLineBoldIcon />
      <Icon.OpenInNewLineLightIcon />

      <Icon.LogoutLineIcon />
      <Icon.LogoutLineBoldIcon />
      <Icon.LogoutLineLightIcon />

      <Icon.LoginLineIcon />
      <Icon.LoginLineBoldIcon />
      <Icon.LoginLineLightIcon />

      <Icon.PlusLineIcon />
      <Icon.PlusLineBoldIcon />
      <Icon.PlusLineLightIcon />

      <Icon.MinusLineIcon />
      <Icon.MinusLineBoldIcon />
      <Icon.MinusLineLightIcon />

      <Icon.CloseLineIcon />
      <Icon.CloseLineBoldIcon />
      <Icon.CloseLineLightIcon />

      <Icon.PlusCircleLineIcon />
      <Icon.PlusCircleLineBoldIcon />
      <Icon.PlusCircleLineLightIcon />
      <Icon.PlusCircleFillIcon />

      <Icon.MinusCircleLineIcon />
      <Icon.MinusCircleLineBoldIcon />
      <Icon.MinusCircleLineLightIcon />
      <Icon.MinusCircleFillIcon />

      <Icon.CloseCircleLineIcon />
      <Icon.CloseCircleLineBoldIcon />
      <Icon.CloseCircleLineLightIcon />
      <Icon.CloseCircleFillIcon />

      <Icon.MenuLineIcon />
      <Icon.MenuLineBoldIcon />
      <Icon.MenuLineLightIcon />

      <Icon.MoreVerticalLineIcon />
      <Icon.MoreVerticalLineLightIcon />

      <Icon.MoreHorizontalLineIcon />
      <Icon.MoreHorizontalLineLightIcon />

      <Icon.CheckLineIcon />
      <Icon.CheckLineBoldIcon />
      <Icon.CheckLineLightIcon />

      <Icon.CheckCircleLineIcon />
      <Icon.CheckCircleLineBoldIcon />
      <Icon.CheckCircleLineLightIcon />
      <Icon.CheckCircleFillIcon />

      <Icon.UploadCircleLineIcon />
      <Icon.UploadCircleLineBoldIcon />
      <Icon.UploadCircleLineLightIcon />
      <Icon.UploadCircleFillIcon />

      <Icon.DownloadCircleLineIcon />
      <Icon.DownloadCircleLineBoldIcon />
      <Icon.DownloadCircleLineLightIcon />
      <Icon.DownloadCircleFillIcon />

      <Icon.SaveCircleLineIcon />
      <Icon.SaveCircleLineBoldIcon />
      <Icon.SaveCircleLineLightIcon />
      <Icon.SaveCircleFillIcon />

      <Icon.ErrorCircleLineIcon />
      <Icon.ErrorCircleLineBoldIcon />
      <Icon.ErrorCircleLineLightIcon />
      <Icon.ErrorCircleFillIcon />

      <Icon.InfoCircleLineIcon />
      <Icon.InfoCircleLineBoldIcon />
      <Icon.InfoCircleLineLightIcon />
      <Icon.InfoCircleFillIcon />

      <Icon.HelpCircleLineIcon />
      <Icon.HelpCircleLineBoldIcon />
      <Icon.HelpCircleLineLightIcon />
      <Icon.HelpCircleFillIcon />

      <Icon.ClockCircleLineIcon />
      <Icon.ClockCircleLineBoldIcon />
      <Icon.ClockCircleLineLightIcon />
      <Icon.ClockCircleFillIcon />

      <Icon.ProgressLineIcon />
      <Icon.ProgressLineBoldIcon />
      <Icon.ProgressLineLightIcon />

      <Icon.ProgressCircleLineIcon />
      <Icon.ProgressCircleLineBoldIcon />
      <Icon.ProgressCircleLineLightIcon />
      <Icon.ProgressCircleFillIcon />

      <Icon.WarningLineIcon />
      <Icon.WarningLineBoldIcon />
      <Icon.WarningLineLightIcon />
      <Icon.WarningFillIcon />

      <Icon.SecurityLineIcon />
      <Icon.SecurityLineBoldIcon />
      <Icon.SecurityLineLightIcon />
      <Icon.SecurityFillIcon />

      <Icon.PrivacyLineIcon />
      <Icon.PrivacyLineBoldIcon />
      <Icon.PrivacyLineLightIcon />
      <Icon.PrivacyFillIcon />

      <Icon.LoginSecurityLineIcon />
      <Icon.LoginSecurityLineBoldIcon />
      <Icon.LoginSecurityLineLightIcon />
      <Icon.LoginSecurityFillIcon />

      <Icon.PrivacySecurityLineIcon />
      <Icon.PrivacySecurityLineBoldIcon />
      <Icon.PrivacySecurityLineLightIcon />
      <Icon.PrivacySecurityFillIcon />

      <Icon.DownloadLineIcon />
      <Icon.DownloadLineBoldIcon />
      <Icon.DownloadLineLightIcon />

      <Icon.UploadLineIcon />
      <Icon.UploadLineBoldIcon />
      <Icon.UploadLineLightIcon />

      <Icon.SaveLineIcon />
      <Icon.SaveLineBoldIcon />
      <Icon.SaveLineLightIcon />

      <Icon.DocumentLineIcon />
      <Icon.DocumentLineBoldIcon />
      <Icon.DocumentLineLightIcon />
      <Icon.DocumentFillIcon />

      <Icon.CopyLineIcon />
      <Icon.CopyLineBoldIcon />
      <Icon.CopyLineLightIcon />
      <Icon.CopyFillIcon />

      <Icon.FileDownloadLineIcon />
      <Icon.FileDownloadLineBoldIcon />
      <Icon.FileDownloadLineLightIcon />
      <Icon.FileDownloadFillIcon />

      <Icon.FileUploadLineIcon />
      <Icon.FileUploadLineBoldIcon />
      <Icon.FileUploadLineLightIcon />
      <Icon.FileUploadFillIcon />

      <Icon.FilePdfLineIcon />
      <Icon.FilePdfLineBoldIcon />
      <Icon.FilePdfLineLightIcon />
      <Icon.FilePdfFillIcon />

      <Icon.FileJpgLineIcon />
      <Icon.FileJpgLineBoldIcon />
      <Icon.FileJpgLineLightIcon />
      <Icon.FileJpgFillIcon />

      <Icon.FileEfsLineIcon />
      <Icon.FileEfsLineBoldIcon />
      <Icon.FileEfsLineLightIcon />
      <Icon.FileEfsFillIcon />

      <Icon.FileZipLineIcon />
      <Icon.FileZipLineBoldIcon />
      <Icon.FileZipLineLightIcon />
      <Icon.FileZipFillIcon />

      <Icon.FileBinLineIcon />
      <Icon.FileBinLineBoldIcon />
      <Icon.FileBinLineLightIcon />
      <Icon.FileBinFillIcon />

      <Icon.FilePlyLineIcon />
      <Icon.FilePlyLineBoldIcon />
      <Icon.FilePlyLineLightIcon />
      <Icon.FilePlyFillIcon />

      <Icon.FileMp4LineIcon />
      <Icon.FileMp4LineBoldIcon />
      <Icon.FileMp4LineLightIcon />
      <Icon.FileMp4FillIcon />

      <Icon.FileDocxLineIcon />
      <Icon.FileDocxLineBoldIcon />
      <Icon.FileDocxLineLightIcon />
      <Icon.FileDocxFillIcon />

      <Icon.FileJsonLineIcon />
      <Icon.FileJsonLineBoldIcon />
      <Icon.FileJsonLineLightIcon />
      <Icon.FileJsonFillIcon />

      <Icon.DocDownloadLineIcon />
      <Icon.DocDownloadLineBoldIcon />
      <Icon.DocDownloadLineLightIcon />
      <Icon.DocDownloadFillIcon />

      <Icon.DocUploadLineIcon />
      <Icon.DocUploadLineBoldIcon />
      <Icon.DocUploadLineLightIcon />
      <Icon.DocUploadFillIcon />

      <Icon.DocMoveLineIcon />
      <Icon.DocMoveLineBoldIcon />
      <Icon.DocMoveLineLightIcon />
      <Icon.DocMoveFillIcon />

      <Icon.DocSearchLineIcon />
      <Icon.DocSearchLineBoldIcon />
      <Icon.DocSearchLineLightIcon />
      <Icon.DocSearchFillIcon />

      <Icon.DocSaveLineIcon />
      <Icon.DocSaveLineBoldIcon />
      <Icon.DocSaveLineLightIcon />
      <Icon.DocSaveFillIcon />

      <Icon.UploadPdfLineIcon />
      <Icon.UploadPdfLineBoldIcon />
      <Icon.UploadPdfLineLightIcon />
      <Icon.UploadPdfFillIcon />

      <Icon.UploadJpgLineIcon />
      <Icon.UploadJpgLineBoldIcon />
      <Icon.UploadJpgLineLightIcon />
      <Icon.UploadJpgFillIcon />

      <Icon.UploadEfsLineIcon />
      <Icon.UploadEfsLineBoldIcon />
      <Icon.UploadEfsLineLightIcon />
      <Icon.UploadEfsFillIcon />

      <Icon.UploadBinLineIcon />
      <Icon.UploadBinLineBoldIcon />
      <Icon.UploadBinLineLightIcon />
      <Icon.UploadBinFillIcon />

      <Icon.UploadZipLineIcon />
      <Icon.UploadZipLineBoldIcon />
      <Icon.UploadZipLineLightIcon />
      <Icon.UploadZipFillIcon />

      <Icon.UploadPlyLineIcon />
      <Icon.UploadPlyLineBoldIcon />
      <Icon.UploadPlyLineLightIcon />
      <Icon.UploadPlyFillIcon />

      <Icon.UploadMp4LineIcon />
      <Icon.UploadMp4LineBoldIcon />
      <Icon.UploadMp4LineLightIcon />
      <Icon.UploadMp4FillIcon />

      <Icon.UploadDocxLineIcon />
      <Icon.UploadDocxLineBoldIcon />
      <Icon.UploadDocxLineLightIcon />
      <Icon.UploadDocxFillIcon />

      <Icon.UploadJsonLineIcon />
      <Icon.UploadJsonLineBoldIcon />
      <Icon.UploadJsonLineLightIcon />
      <Icon.UploadJsonFillIcon />

      <Icon.DownloadPdfLineIcon />
      <Icon.DownloadPdfLineBoldIcon />
      <Icon.DownloadPdfLineLightIcon />
      <Icon.DownloadPdfFillIcon />

      <Icon.DownloadJpgLineIcon />
      <Icon.DownloadJpgLineBoldIcon />
      <Icon.DownloadJpgLineLightIcon />
      <Icon.DownloadJpgFillIcon />

      <Icon.DownloadEfsLineIcon />
      <Icon.DownloadEfsLineBoldIcon />
      <Icon.DownloadEfsLineLightIcon />
      <Icon.DownloadEfsFillIcon />

      <Icon.DownloadBinLineIcon />
      <Icon.DownloadBinLineBoldIcon />
      <Icon.DownloadBinLineLightIcon />
      <Icon.DownloadBinFillIcon />

      <Icon.DownloadZipLineIcon />
      <Icon.DownloadZipLineBoldIcon />
      <Icon.DownloadZipLineLightIcon />
      <Icon.DownloadZipFillIcon />

      <Icon.DownloadPlyLineIcon />
      <Icon.DownloadPlyLineBoldIcon />
      <Icon.DownloadPlyLineLightIcon />
      <Icon.DownloadPlyFillIcon />

      <Icon.DownloadMp4LineIcon />
      <Icon.DownloadMp4LineBoldIcon />
      <Icon.DownloadMp4LineLightIcon />
      <Icon.DownloadMp4FillIcon />

      <Icon.DownloadDocxLineIcon />
      <Icon.DownloadDocxLineBoldIcon />
      <Icon.DownloadDocxLineLightIcon />
      <Icon.DownloadDocxFillIcon />

      <Icon.DownloadJsonLineIcon />
      <Icon.DownloadJsonLineBoldIcon />
      <Icon.DownloadJsonLineLightIcon />
      <Icon.DownloadJsonFillIcon />

      <Icon.SavePdfLineIcon />
      <Icon.SavePdfLineBoldIcon />
      <Icon.SavePdfLineLightIcon />

      <Icon.SaveJpgLineIcon />
      <Icon.SaveJpgLineBoldIcon />
      <Icon.SaveJpgLineLightIcon />

      <Icon.SaveEfsLineIcon />
      <Icon.SaveEfsLineBoldIcon />
      <Icon.SaveEfsLineLightIcon />

      <Icon.SaveBinLineIcon />
      <Icon.SaveBinLineBoldIcon />
      <Icon.SaveBinLineLightIcon />

      <Icon.SaveZipLineIcon />
      <Icon.SaveZipLineBoldIcon />
      <Icon.SaveZipLineLightIcon />

      <Icon.SavePlyLineIcon />
      <Icon.SavePlyLineBoldIcon />
      <Icon.SavePlyLineLightIcon />

      <Icon.SaveMp4LineIcon />
      <Icon.SaveMp4LineBoldIcon />
      <Icon.SaveMp4LineLightIcon />

      <Icon.SaveDocxLineIcon />
      <Icon.SaveDocxLineBoldIcon />
      <Icon.SaveDocxLineLightIcon />

      <Icon.SaveJsonLineIcon />
      <Icon.SaveJsonLineBoldIcon />
      <Icon.SaveJsonLineLightIcon />

      <Icon.FolderLineIcon />
      <Icon.FolderLineBoldIcon />
      <Icon.FolderLineLightIcon />
      <Icon.FolderFillIcon />

      <Icon.FolderZipLineIcon />
      <Icon.FolderZipLineBoldIcon />
      <Icon.FolderZipLineLightIcon />
      <Icon.FolderZipFillIcon />

      <Icon.FolderDownloadLineIcon />
      <Icon.FolderDownloadLineBoldIcon />
      <Icon.FolderDownloadLineLightIcon />
      <Icon.FolderDownloadFillIcon />

      <Icon.FolderUploadLineIcon />
      <Icon.FolderUploadLineBoldIcon />
      <Icon.FolderUploadLineLightIcon />
      <Icon.FolderUploadFillIcon />

      <Icon.RecordLineIcon />
      <Icon.RecordLineBoldIcon />
      <Icon.RecordLineLightIcon />
      <Icon.RecordFillIcon />

      <Icon.VideoLineIcon />
      <Icon.VideoLineBoldIcon />
      <Icon.VideoLineLightIcon />
      <Icon.VideoFillIcon />

      <Icon.ImageLineIcon />
      <Icon.ImageLineBoldIcon />
      <Icon.ImageLineLightIcon />
      <Icon.ImageFillIcon />

      <Icon.DesktopLineIcon />
      <Icon.DesktopLineBoldIcon />
      <Icon.DesktopLineLightIcon />
      <Icon.DesktopFillIcon />

      <Icon.MobileLineIcon />
      <Icon.MobileLineBoldIcon />
      <Icon.MobileLineLightIcon />
      <Icon.MobileFillIcon />

      <Icon.TabletLineIcon />
      <Icon.TabletLineBoldIcon />
      <Icon.TabletLineLightIcon />
      <Icon.TabletFillIcon />

      <Icon.SmartGlassesLineIcon />
      <Icon.SmartGlassesLineBoldIcon />
      <Icon.SmartGlassesLineLightIcon />
      <Icon.SmartGlassesFillIcon />

      <Icon.MapLineIcon />
      <Icon.MapLineBoldIcon />
      <Icon.MapLineLightIcon />
      <Icon.MapFillIcon />

      <Icon.ThreeDMapLineIcon />
      <Icon.ThreeDMapLineBoldIcon />
      <Icon.ThreeDMapLineLightIcon />
      <Icon.ThreeDMapFillIcon />

      <Icon.LocationLineIcon />
      <Icon.LocationLineBoldIcon />
      <Icon.LocationLineLightIcon />
      <Icon.LocationFillIcon />

      <Icon.RouteLineIcon />
      <Icon.RouteLineBoldIcon />
      <Icon.RouteLineLightIcon />

      <Icon.ThreeDLineIcon />
      <Icon.ThreeDLineBoldIcon />
      <Icon.ThreeDLineLightIcon />
      <Icon.ThreeDFillIcon />

      <Icon.ThreeDSpaceLineIcon />
      <Icon.ThreeDSpaceLineBoldIcon />
      <Icon.ThreeDSpaceLineLightIcon />
      <Icon.ThreeDSpaceFillIcon />

      <Icon.TrackingLineIcon />
      <Icon.TrackingLineBoldIcon />
      <Icon.TrackingLineLightIcon />
      <Icon.TrackingFillIcon />

      <Icon.TrackingObjectLineIcon />
      <Icon.TrackingObjectLineBoldIcon />
      <Icon.TrackingObjectLineLightIcon />
      <Icon.TrackingObjectFillIcon />

      <Icon.ScanLineIcon />
      <Icon.ScanLineBoldIcon />
      <Icon.ScanLineLightIcon />

      <Icon.ArScanLineIcon />
      <Icon.ArScanLineBoldIcon />
      <Icon.ArScanLineLightIcon />
      <Icon.ArScanFillIcon />

      <Icon.FloorLineIcon />
      <Icon.FloorLineBoldIcon />
      <Icon.FloorLineLightIcon />
      <Icon.FloorFillIcon />

      <Icon.TerminalLineIcon />
      <Icon.TerminalLineBoldIcon />
      <Icon.TerminalLineLightIcon />
      <Icon.TerminalFillIcon />

      <Icon.TerminalSettingLineIcon />
      <Icon.TerminalSettingLineBoldIcon />
      <Icon.TerminalSettingLineLightIcon />
      <Icon.TerminalSettingFillIcon />

      <Icon.RecognitionLineIcon />
      <Icon.RecognitionLineBoldIcon />
      <Icon.RecognitionLineLightIcon />

      <Icon.RecognitionObjectLineIcon />
      <Icon.RecognitionObjectLineBoldIcon />
      <Icon.RecognitionObjectLineLightIcon />
      <Icon.RecognitionObjectFillIcon />

      <Icon.RecognitionObjectOffLineIcon />
      <Icon.RecognitionObjectOffLineBoldIcon />
      <Icon.RecognitionObjectOffLineLightIcon />
      <Icon.RecognitionObjectOffFillIcon />

      <Icon.TopViewLineIcon />
      <Icon.TopViewLineBoldIcon />
      <Icon.TopViewLineLightIcon />

      <Icon.LeftViewLineIcon />
      <Icon.LeftViewLineBoldIcon />
      <Icon.LeftViewLineLightIcon />

      <Icon.RightViewLineIcon />
      <Icon.RightViewLineBoldIcon />
      <Icon.RightViewLineLightIcon />

      <Icon.BottomViewLineIcon />
      <Icon.BottomViewLineBoldIcon />
      <Icon.BottomViewLineLightIcon />

      <Icon.LayerVerticalLineIcon />
      <Icon.LayerVerticalLineBoldIcon />
      <Icon.LayerVerticalLineLightIcon />
      <Icon.LayerVerticalFillIcon />

      <Icon.LayerHorizontalLineIcon />
      <Icon.LayerHorizontalLineBoldIcon />
      <Icon.LayerHorizontalLineLightIcon />
      <Icon.LayerHorizontalFillIcon />

      <Icon.DigitalTwinLineIcon />
      <Icon.DigitalTwinLineBoldIcon />
      <Icon.DigitalTwinLineLightIcon />
      <Icon.DigitalTwinFillIcon />

      <Icon.SlamLineIcon />
      <Icon.SlamLineBoldIcon />
      <Icon.SlamLineLightIcon />
      <Icon.SlamFillIcon />

      <Icon.VpsLineIcon />
      <Icon.VpsLineBoldIcon />
      <Icon.VpsLineLightIcon />
      <Icon.VpsFillIcon />

      <Icon.CalibrationLineIcon />
      <Icon.CalibrationLineBoldIcon />
      <Icon.CalibrationLineLightIcon />

      <Icon.MapFlowLineIcon />
      <Icon.MapFlowLineBoldIcon />
      <Icon.MapFlowLineLightIcon />
      <Icon.MapFlowFillIcon />

      <Icon.ObjectToolBoxLineIcon />
      <Icon.ObjectToolBoxLineBoldIcon />
      <Icon.ObjectToolBoxLineLightIcon />
      <Icon.ObjectToolBoxFillIcon />

      <Icon.ObjectNewLineIcon />
      <Icon.ObjectNewLineBoldIcon />
      <Icon.ObjectNewLineLightIcon />
      <Icon.ObjectNewFillIcon />

      <Icon.ObjectCheckLineIcon />
      <Icon.ObjectCheckLineBoldIcon />
      <Icon.ObjectCheckLineLightIcon />
      <Icon.ObjectCheckFillIcon />

      <Icon.ObjectGroupLineIcon />
      <Icon.ObjectGroupLineBoldIcon />
      <Icon.ObjectGroupLineLightIcon />
      <Icon.ObjectGroupFillIcon />

      <Icon.ObjectSelectLineIcon />
      <Icon.ObjectSelectLineBoldIcon />
      <Icon.ObjectSelectLineLightIcon />
      <Icon.ObjectSelectFillIcon />

      <Icon.IdentificationLineIcon />
      <Icon.IdentificationLineBoldIcon />
      <Icon.IdentificationLineLightIcon />
      <Icon.IdentificationFillIcon />

      <Icon.IdSecurityLineIcon />
      <Icon.IdSecurityLineBoldIcon />
      <Icon.IdSecurityLineLightIcon />
      <Icon.IdSecurityFillIcon />

      <Icon.PasswordLineIcon />
      <Icon.PasswordLineBoldIcon />
      <Icon.PasswordLineLightIcon />
      <Icon.PasswordFillIcon />

      <Icon.IdCardLineIcon />
      <Icon.IdCardLineBoldIcon />
      <Icon.IdCardLineLightIcon />
      <Icon.IdCardFillIcon />

      <Icon.CalanderLineIcon />
      <Icon.CalanderLineBoldIcon />
      <Icon.CalanderLineLightIcon />
      <Icon.CalanderFillIcon />

      <Icon.CalanderCheckLineIcon />
      <Icon.CalanderCheckLineBoldIcon />
      <Icon.CalanderCheckLineLightIcon />
      <Icon.CalanderCheckFillIcon />

      <Icon.CalanderMeetLineIcon />
      <Icon.CalanderMeetLineBoldIcon />
      <Icon.CalanderMeetLineLightIcon />
      <Icon.CalanderMeetFillIcon />

      <Icon.FlexibleWorkLineIcon />
      <Icon.FlexibleWorkLineBoldIcon />
      <Icon.FlexibleWorkLineLightIcon />
      <Icon.FlexibleWorkFillIcon />

      <Icon.BookBudgetLineIcon />
      <Icon.BookBudgetLineBoldIcon />
      <Icon.BookBudgetLineLightIcon />
      <Icon.BookBudgetFillIcon />

      <Icon.RemoteWorkLineIcon />
      <Icon.RemoteWorkLineBoldIcon />
      <Icon.RemoteWorkLineLightIcon />
      <Icon.RemoteWorkFillIcon />

      <Icon.PointLineIcon />
      <Icon.PointLineBoldIcon />
      <Icon.PointLineLightIcon />
      <Icon.PointFillIcon />

      <Icon.CurrencyUsLineIcon />
      <Icon.CurrencyUsLineBoldIcon />
      <Icon.CurrencyUsLineLightIcon />
      <Icon.CurrencyUsFillIcon />

      <Icon.CurrencyKrLineIcon />
      <Icon.CurrencyKrLineBoldIcon />
      <Icon.CurrencyKrLineLightIcon />
      <Icon.CurrencyKrFillIcon />

      <Icon.CurrencyUsCircleLineIcon />
      <Icon.CurrencyUsCircleLineBoldIcon />
      <Icon.CurrencyUsCircleLineLightIcon />
      <Icon.CurrencyUsCircleFillIcon />

      <Icon.CurrencyKrCircleLineIcon />
      <Icon.CurrencyKrCircleLineBoldIcon />
      <Icon.CurrencyKrCircleLineLightIcon />
      <Icon.CurrencyKrCircleFillIcon />

      <Icon.CreditCardLineIcon />
      <Icon.CreditCardLineBoldIcon />
      <Icon.CreditCardLineLightIcon />
      <Icon.CreditCardFillIcon />

      <Icon.PrizeMoneyLineIcon />
      <Icon.PrizeMoneyLineBoldIcon />
      <Icon.PrizeMoneyLineLightIcon />
      <Icon.PrizeMoneyFillIcon />

      <Icon.SupportFundLineIcon />
      <Icon.SupportFundLineBoldIcon />
      <Icon.SupportFundLineLightIcon />
      <Icon.SupportFundFillIcon />

      <Icon.GiftLineIcon />
      <Icon.GiftLineBoldIcon />
      <Icon.GiftLineLightIcon />
      <Icon.GiftFillIcon />
    </div>
  );
}

export default IconArea;
