import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Provider/AuthGuard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'salon-list',
    loadChildren: () => import('./Pages/salon-list/salon-list.module').then( m => m.SalonListPageModule)
  },
  // {
  //   path: 'sort-modal1',
  //   loadChildren: () => import('./Pages/sort-modal1/sort-modal1.module').then( m => m.SortModal1PageModule)
  // },
  // {
  //   path: 'sort-modal2',
  //   loadChildren: () => import('./Pages/sort-modal2/sort-modal2.module').then( m => m.SortModal2PageModule)
  // },
  {
    path: 'salon-detail',
    loadChildren: () => import('./Pages/salon-detail/salon-detail.module').then( m => m.SalonDetailPageModule)
  },
  {
    path: 'select-service',
    loadChildren: () => import('./Pages/select-service/select-service.module').then( m => m.SelectServicePageModule)
  },
  {
    path: 'select-time',
    loadChildren: () => import('./Pages/select-time/select-time.module').then( m => m.SelectTimePageModule)
  },
  {
    path: 'signup-option',
    loadChildren: () => import('./Pages/signup-option/signup-option.module').then( m => m.SignupOptionPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./Pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'phone-number',
    loadChildren: () => import('./Pages/phone-number/phone-number.module').then( m => m.PhoneNumberPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./Pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./Pages/otp/otp.module').then( m => m.OTPPageModule)
  },
  {
    path: 'set-new-password',
    loadChildren: () => import('./Pages/set-new-password/set-new-password.module').then( m => m.SetNewPasswordPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./Pages/confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./Pages/payment/payment.module').then( m => m.PaymentPageModule),
    canActivate:[AuthGuard]
  },
  // {
  //   path: 'success-modal',
  //   loadChildren: () => import('./Pages/success-modal/success-modal.module').then( m => m.SuccessModalPageModule)
  // },
  {
    path: 'booking-confirm',
    loadChildren: () => import('./Pages/booking-confirm/booking-confirm.module').then( m => m.BookingConfirmPageModule),
    canActivate:[AuthGuard]
  },
  // {
  //   path: 'cancel-booking',
  //   loadChildren: () => import('./Pages/cancel-booking/cancel-booking.module').then( m => m.CancelBookingPageModule)
  // },
  // {
  //   path: 'my-appointment',
  //   loadChildren: () => import('./Pages/my-appointment/my-appointment.module').then( m => m.MyAppointmentPageModule)
  // },
  {
    path: 'past-order-detail',
    loadChildren: () => import('./Pages/past-order-detail/past-order-detail.module').then( m => m.PastOrderDetailPageModule),
    canActivate:[AuthGuard]
  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./Pages/profile/profile.module').then( m => m.ProfilePageModule)
  // },
  {
    path: 'edit-profile',
    loadChildren: () => import('./Pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'favorites',
    loadChildren: () => import('./Pages/favorites/favorites.module').then( m => m.FavoritesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./Pages/settings/settings.module').then( m => m.SettingsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'booking-terms',
    loadChildren: () => import('./Pages/booking-terms/booking-terms.module').then( m => m.BookingTermsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./Pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'language-list',
    loadChildren: () => import('./Pages/language-list/language-list.module').then( m => m.LanguageListPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'offer',
    loadChildren: () => import('./Pages/offer/offer.module').then( m => m.OfferPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'customer-support',
    loadChildren: () => import('./Pages/customer-support/customer-support.module').then( m => m.CustomerSupportPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'direction',
    loadChildren: () => import('./Pages/direction/direction.module').then( m => m.DirectionPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'map-with-salon',
    loadChildren: () => import('./Pages/map-with-salon/map-with-salon.module').then( m => m.MapWithSalonPageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'change-password',
    loadChildren: () => import('./Pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'family-info',
    loadChildren: () => import('./Pages/family-info/family-info.module').then( m => m.FamilyInfoPageModule)
  },
  {
    path: 'add-relative',
    loadChildren: () => import('./Pages/add-relative/add-relative.module').then( m => m.AddRelativePageModule)
  },
  {
    path: 'other-family',
    loadChildren: () => import('./Pages/other-family/other-family.module').then( m => m.OtherFamilyPageModule)
  },
  {
    path: 'other-family-info',
    loadChildren: () => import('./Pages/other-family-info/other-family-info.module').then( m => m.OtherFamilyInfoPageModule)
  },
  {
    path: 'view-other-family',
    loadChildren: () => import('./Pages/view-other-family/view-other-family.module').then( m => m.ViewOtherFamilyPageModule)
  },
  {
    path: 'business-info',
    loadChildren: () => import('./Pages/business-info/business-info.module').then( m => m.BusinessInfoPageModule)
  },
  {
    path: 'business-details',
    loadChildren: () => import('./Pages/business-details/business-details.module').then( m => m.BusinessDetailsPageModule)
  },
  {
    path: 'job-details',
    loadChildren: () => import('./Pages/job-details/job-details.module').then( m => m.JobDetailsPageModule)
  },
  {
    path: 'job-info',
    loadChildren: () => import('./Pages/job-info/job-info.module').then( m => m.JobInfoPageModule)
  },
  {
    path: 'matrimonial',
    loadChildren: () => import('./Pages/matrimonial/matrimonial.module').then( m => m.MatrimonialPageModule)
  },
  {
    path: 'committee',
    loadChildren: () => import('./Pages/committee/committee.module').then( m => m.CommitteePageModule)
  },
  {
    path: 'receipe',
    loadChildren: () => import('./Pages/receipe/receipe.module').then( m => m.ReceipePageModule)
  },
  {
    path: 'blood-donnation',
    loadChildren: () => import('./Pages/blood-donnation/blood-donnation.module').then( m => m.BloodDonnationPageModule)
  },
  {
    path: 'recipe-details',
    loadChildren: () => import('./Pages/recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
  },
  {
    path: 'add-recipe',
    loadChildren: () => import('./Pages/add-recipe/add-recipe.module').then( m => m.AddRecipePageModule)
  },
  {
    path: 'bloodgroup-town',
    loadChildren: () => import('./Pages/bloodgroup-town/bloodgroup-town.module').then( m => m.BloodgroupTownPageModule)
  },
  {
    path: 'bgtown-members',
    loadChildren: () => import('./Pages/bgtown-members/bgtown-members.module').then( m => m.BgtownMembersPageModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./Pages/application/application.module').then( m => m.ApplicationPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./Pages/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'communication',
    loadChildren: () => import('./Pages/communication/communication.module').then( m => m.CommunicationPageModule)
  },
  {
    path: 'business-list',
    loadChildren: () => import('./Pages/business-list/business-list.module').then( m => m.BusinessListPageModule)
  },
  {
    path: 'add-request',
    loadChildren: () => import('./Pages/add-request/add-request.module').then( m => m.AddRequestPageModule)
  },
  {
    path: 'add-business',
    loadChildren: () => import('./Pages/add-business/add-business.module').then( m => m.AddBusinessPageModule)
  },
  {
    path: 'mybusinesses',
    loadChildren: () => import('./Pages/mybusinesses/mybusinesses.module').then( m => m.MybusinessesPageModule)
  },
  {
    path: 'my-jobs',
    loadChildren: () => import('./Pages/my-jobs/my-jobs.module').then( m => m.MyJobsPageModule)
  },
  {
    path: 'addjob',
    loadChildren: () => import('./Pages/addjob/addjob.module').then( m => m.AddjobPageModule)
  },
  { 
    path: 'myadverts',
    loadChildren: () => import('./Pages/myadverts/myadverts.module').then( m => m.MyadvertsPageModule)
  },
  {
    path: 'alladverts',
    loadChildren: () => import('./Pages/alladverts/alladverts.module').then( m => m.AlladvertsPageModule)
  },
  {
    path: 'ad-details',
    loadChildren: () => import('./Pages/ad-details/ad-details.module').then( m => m.AdDetailsPageModule)
  },  {
    path: 'history',
    loadChildren: () => import('./Pages/history/history.module').then( m => m.HistoryPageModule)
  }






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
