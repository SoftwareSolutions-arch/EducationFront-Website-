import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimationComponent } from './animation/animation.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { LawComponent } from './law/law.component';
import { MbaComponent } from './mba/mba.component';
import { MassCommComponent } from './mass-comm/mass-comm.component';
import { MassMedicineComponent } from './mass-medicine/mass-medicine.component';
import { ArtsComponent } from './arts/arts.component';
import { ITComponent } from './it/it.component';
import { TourismComponent } from './tourism/tourism.component';
import { QuestionComponent } from './question/question.component';
import { TopCollegeComponent } from './top-college/top-college.component';
import { StudyAbroadComponent } from './study-abroad/study-abroad.component';
import { ArticlesComponent } from './articles/articles.component';
import { CareerComponent } from './career/career.component';
import { ExamComponent } from './exam/exam.component';
import { NationalBoardComponent } from './national-board/national-board.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GrievancesComponent } from './grievances/grievances.component';
import { ExamInIndiaComponent } from './exam-in-india/exam-in-india.component';
import { SamplePaperComponent } from './animation/sample-paper/sample-paper.component';
import { CollegeReviewComponent } from './animation/college-review/college-review.component';
import { IitKanpurComponent } from './top-college/iit-kanpur/iit-kanpur.component';
import { AllReviewComponent } from './top-college/all-review/all-review.component';
import { MbaCollegeComponent, DialogOverviewExampleDialog } from './mba-college/mba-college.component';
import { ArticlesDescriptionComponent } from './articles/articles-description/articles-description.component';
import { OtherArticlesComponent } from './national-board/other-articles/other-articles.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { CollegePredictorComponent } from './college-predictor/college-predictor.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { ProfileComponent } from './profile/profile.component';
import { ShortlistcollegeComponent } from './shortlistcollege/shortlistcollege.component';
import { IcseComponent } from './icse/icse.component';
import { NiosComponent } from './nios/nios.component';
import { EngineeringCollegeComponent } from './engineering-college/engineering-college.component';
import { MedicalCollegeComponent } from './medical-college/medical-college.component';


const routes: Routes = [
  //{ path: '', component: LoginComponent, pathMatch: 'full', },
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'animation', component: AnimationComponent },
  { path: 'engineering', component: EngineeringComponent },
  { path: 'law', component: LawComponent },
  { path: 'mba', component: MbaComponent },
  { path: 'mass_comm', component: MassCommComponent },
  { path: 'mass_medicine', component: MassMedicineComponent },
  { path: 'arts', component: ArtsComponent },
  { path: 'it', component: ITComponent },
  { path: 'tourism', component: TourismComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'top_college', component: TopCollegeComponent },
  { path: 'study_abroad', component: StudyAbroadComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'career', component: CareerComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'national_broad', component: NationalBoardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'management_team', component: ManagementTeamComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'grievances', component: GrievancesComponent },
  { path: 'exam_in_india', component: ExamInIndiaComponent },
  { path: 'sample_paper', component: SamplePaperComponent },
  { path: 'college_review', component: CollegeReviewComponent },
  { path: 'iit_kanpur', component: IitKanpurComponent },
  { path: 'all_review', component: AllReviewComponent },
  { path: 'mba_college', component: MbaCollegeComponent },
  { path: 'medical_college', component: MedicalCollegeComponent },
  { path: 'engineering_college', component: EngineeringCollegeComponent },
  { path: 'articles_description', component: ArticlesDescriptionComponent },
  { path: 'other_articles', component: OtherArticlesComponent },
  { path: 'application_form', component: ApplicationFormComponent },
  { path: 'college_predictor', component: CollegePredictorComponent },
  { path: 'comment_box', component: CommentBoxComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'shortlistcollege', component: ShortlistcollegeComponent },
  { path: 'icse', component: IcseComponent },
  { path: 'nios', component: NiosComponent }

























];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
