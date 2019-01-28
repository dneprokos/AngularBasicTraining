import { HomeComponent } from './_Pages/home/home.component';
import { UnsortedTestComponentsComponent } from './_Pages/unsorted-test-components/unsorted-test-components.component';
import { GitFollowingComponent } from './_Pages/git-following/git-following.component';
import { GithubPofileComponent } from './_Components/github-pofile/github-pofile.component';
import { ArchiveComponent } from './_Pages/archive/archive.component';
import { PostsComponent } from './_Pages/posts/posts.component';
import { CoursesComponent } from './_Pages/courses.component';
import { ContactFormComponent } from './_Pages/contact-form/contact-form.component';
import { CreateCourseComponent } from './_Pages/create-course/create-course.component';
import { NewCourseFormComponent } from './_Pages/new-course-form/new-course-form.component';
import { SignupFormComponent } from './_Components/signup-form/signup-form.component';
import { FormBuilderComponent } from './_Pages/form-builder/form-builder.component';
import { ChangePasswordComponent } from './_Pages/change-password/change-password.component';
import { InputFieldComponent } from './_Pages/input-field/input-field.component';
import { NgSwitchCaseComponent } from './_Pages/ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './_Pages/ng-for/ng-for.component';
import { NgIfComponent } from './_Pages/ng-if/ng-if.component';
import { GlyphIconsComponent } from './_Pages/glyph-icons/glyph-icons.component';
import { TestPanelsComponent } from './_Pages/test-panels/test-panels.component';
import { ReduxExampleComponent } from './countingRedux/redux-example/redux-example.component';
import { AngularMeterialComponent } from './_Pages/angular-meterial/angular-meterial.component';
import { AdminComponent } from './_Pages/admin/admin.component';
import { AuthGuard } from './_Services/auth-guard.service';
import { AdminAuthGuard } from './_Services/admin-auth-guard.service';
import { LoginComponent } from './_Pages/login/login.component';
import { NoAccessComponent } from './_Pages/no-access/no-access.component';
import { NotFoundComponent } from './_Pages/not-found/not-found.component';

export const routes = [
    { path: '', component: HomeComponent },
    { path: 'unsorted', component: UnsortedTestComponentsComponent },
    { path: 'following', component: GitFollowingComponent },
    { path: 'following/:id/:username', component: GithubPofileComponent },
    { path: 'archive/:year/:month', component: ArchiveComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'contactform', component: ContactFormComponent },
    { path: 'createcourse', component: CreateCourseComponent },
    { path: 'newcourse', component: NewCourseFormComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: 'formbuilder', component: FormBuilderComponent },
    { path: 'changepassword', component: ChangePasswordComponent },
    { path: 'inputfield', component: InputFieldComponent },
    { path: 'ngswitch', component: NgSwitchCaseComponent },
    { path: 'ngfor', component: NgForComponent },
    { path: 'ngif', component: NgIfComponent },
    { path: 'glyphicons', component: GlyphIconsComponent },
    { path: 'testpanels', component: TestPanelsComponent },
    { path: 'redux', component: ReduxExampleComponent },
    { path: 'angulalMaterial', component: AngularMeterialComponent },
    {
      path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: 'no-access', component: NoAccessComponent },
    { path: '**', component: NotFoundComponent },
  ]