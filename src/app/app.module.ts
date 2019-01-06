import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './services/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikebuttonComponent } from './likebutton/likebutton.component';
import { SafeTraversalOperatorComponent } from './safe-traversal-operator/safe-traversal-operator.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GitFollowingComponent } from './git-following/git-following.component';
import { GitFollowingService } from './services/git-following.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubPofileComponent } from './github-pofile/github-pofile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { UnsortedTestComponentsComponent } from './unsorted-test-components/unsorted-test-components.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { GlyphIconsComponent } from './glyph-icons/glyph-icons.component';
import { TestPanelsComponent } from './test-panels/test-panels.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SignupFormComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    InputFieldComponent,
    TitleCasePipe,
    PanelComponent,
    LikebuttonComponent,
    SafeTraversalOperatorComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CreateCourseComponent,
    NewCourseFormComponent,
    FormBuilderComponent,
    ChangePasswordComponent,
    PostsComponent,
    GitFollowingComponent,
    NavbarComponent,
    HomeComponent,
    GithubPofileComponent,
    NotFoundComponent,
    UnsortedTestComponentsComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgIfComponent,
    GlyphIconsComponent,
    TestPanelsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'unsorted', component: UnsortedTestComponentsComponent },
      {path: 'following', component: GitFollowingComponent },
      {path: 'following/:id/:username', component: GithubPofileComponent },
      {path: 'posts', component: PostsComponent },
      {path: 'courses', component: CoursesComponent},
      {path: 'contactform', component: ContactFormComponent},
      {path: 'createcourse', component: CreateCourseComponent},
      {path: 'newcourse', component: NewCourseFormComponent},
      {path: 'signup', component: SignupFormComponent},
      {path: 'formbuilder', component: FormBuilderComponent},      
      {path: 'changepassword', component: ChangePasswordComponent},      
      {path: 'inputfield', component: InputFieldComponent},
      {path: 'ngswitch', component: NgSwitchCaseComponent},
      {path: 'ngfor', component: NgForComponent},      
      {path: 'ngif', component: NgIfComponent},
      {path: 'glyphicons', component: GlyphIconsComponent},       
      {path: 'testpanels', component: TestPanelsComponent},       
      {path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    GitFollowingService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
