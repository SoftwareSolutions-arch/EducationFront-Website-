import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent ,footer_dailog} from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AnimationComponent , animationpopup ,anspopup } from './animation/animation.component';
import { EngineeringComponent , popup_download , answerpopup2 , quepopup } from './engineering/engineering.component';
import { LawComponent , popup_law , law_anspopup , law_quepopup } from './law/law.component';
import { MbaComponent , popupmba } from './mba/mba.component';
import { MassCommComponent , masspopup_login , anspopup_mass , quepopup_mass } from './mass-comm/mass-comm.component';
import { MassMedicineComponent ,mass_quepopup , mass_anspopup } from './mass-medicine/mass-medicine.component';
import { ArtsComponent , popup_arts } from './arts/arts.component';
import { ITComponent , popupIT } from './it/it.component';
import { TourismComponent , popup_tourism } from './tourism/tourism.component';
import { QuestionComponent , que_popup  , que_anspopup} from './question/question.component';
import { TopCollegeComponent , signinpopup } from './top-college/top-college.component';
import { StudyAbroadComponent } from './study-abroad/study-abroad.component';
import { ArticlesComponent } from './articles/articles.component';
import { CareerComponent } from './career/career.component';
import { MbaCollegeComponent ,  DialogOverviewExampleDialog } from './mba-college/mba-college.component';
import { ExamComponent } from './exam/exam.component';
import { NationalBoardComponent } from './national-board/national-board.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent} from './feedback/feedback.component';
import { GrievancesComponent } from './grievances/grievances.component';
import { ExamInIndiaComponent ,exampopup } from './exam-in-india/exam-in-india.component';
import { SamplePaperComponent } from './animation/sample-paper/sample-paper.component';
import { CollegeReviewComponent } from './animation/college-review/college-review.component';
import { IitKanpurComponent } from './top-college/iit-kanpur/iit-kanpur.component';
import { AllReviewComponent } from './top-college/all-review/all-review.component';
import { ArticlesDescriptionComponent } from './articles/articles-description/articles-description.component';
import { OtherArticlesComponent } from './national-board/other-articles/other-articles.component';
import { ApplicationFormComponent , statepopup } from './application-form/application-form.component';
import { MatStepperModule} from '@angular/material/stepper';
import { MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms'
import { MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { CollegePredictorComponent } from './college-predictor/college-predictor.component';
import { MatTooltipModule} from '@angular/material/tooltip';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule} from 'ngx-pagination';
import { AutocompleteLibModule} from 'angular-ng-autocomplete';
import { MatExpansionModule} from '@angular/material/expansion';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProfileComponent } from './profile/profile.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ShortlistcollegeComponent } from './shortlistcollege/shortlistcollege.component';
import { IcseComponent } from './icse/icse.component';
import { NiosComponent } from './nios/nios.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { EngineeringCollegeComponent } from './engineering-college/engineering-college.component';
import { MedicalCollegeComponent } from './medical-college/medical-college.component';
import {MatDividerModule} from '@angular/material/divider';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('528961187921-ld24b25466u4t2lacn9r35asg000lfis.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2259314507523740')
  },
  
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    AnimationComponent,
    EngineeringComponent,
    LawComponent,
    MbaComponent,
    MassCommComponent,
    MassMedicineComponent,
    ArtsComponent,
    ITComponent,
    TourismComponent,
    QuestionComponent,
    TopCollegeComponent,
    StudyAbroadComponent,
    ArticlesComponent,
    CareerComponent,
    MbaCollegeComponent,
    ExamComponent,
    NationalBoardComponent,
    ContactComponent,
    AboutComponent,
    ManagementTeamComponent,
    DialogOverviewExampleDialog,
    FeedbackComponent,
    footer_dailog,
    GrievancesComponent,
    animationpopup,
    ExamInIndiaComponent,
    anspopup,
    exampopup,
    SamplePaperComponent,
    CollegeReviewComponent,
    IitKanpurComponent,
    AllReviewComponent,
    ArticlesDescriptionComponent,
    OtherArticlesComponent,
    ApplicationFormComponent,
    CollegePredictorComponent,
    CommentBoxComponent,
    que_popup,
    popup_download,
    popup_law,
    popupmba,
    popup_arts,
    popupIT,
    popup_tourism,
    answerpopup2,
    quepopup,
    law_anspopup,
    law_quepopup,
    anspopup_mass,
    masspopup_login,
    quepopup_mass,
    law_quepopup,
    mass_anspopup,
    mass_quepopup,
    que_anspopup,
    signinpopup,
    ProfileComponent,
    ShortlistcollegeComponent,
    IcseComponent,
    NiosComponent,
    EngineeringCollegeComponent,
    MedicalCollegeComponent
  ],

  entryComponents: [DialogOverviewExampleDialog ,
     footer_dailog 
    
    ,animationpopup,
     anspopup, exampopup , 
     que_popup , 
     popup_download,
     popup_law,
     popupmba,
     popup_arts,
     popupIT,
     popup_tourism,
     answerpopup2,
     quepopup,
     law_anspopup,
     law_quepopup,
     anspopup_mass,
     masspopup_login,
     quepopup_mass,
     law_quepopup,
     mass_anspopup,
     mass_quepopup,
     que_anspopup,
     signinpopup
    ],
  imports: [
    BrowserModule, 
    NgxPaginationModule,
    MatTabsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    MatDialogModule,
    FormsModule,
    NgxSpinnerModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTooltipModule,
    SocialLoginModule,
    HttpClientModule,
    AngularEditorModule,
    AutocompleteLibModule,
    MatExpansionModule,
    MatDividerModule
  ],
  
  providers: [
  {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
