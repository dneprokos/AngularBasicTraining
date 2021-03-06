import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './_Pages/courses.component';
import {
  HttpClientModule,
  HttpClientJsonpModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { SummaryPipe } from './_Pipes/summary.pipe';
import { TitleCasePipe } from './_Pipes/title-case.pipe';
import { InputFormatDirective } from './input-format.directive';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './_Pages/home/home.component';
import { PostsComponent } from './_Pages/posts/posts.component';
import { GitFollowingComponent } from './_Pages/git-following/git-following.component';
import { GlyphIconsComponent } from './_Pages/glyph-icons/glyph-icons.component';
import { TestPanelsComponent } from './_Pages/test-panels/test-panels.component';
import { NotFoundComponent } from './_Pages/not-found/not-found.component';
import { NgSwitchCaseComponent } from './_Pages/ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './_Pages/ng-for/ng-for.component';
import { NgIfComponent } from './_Pages/ng-if/ng-if.component';
import { LoginComponent } from './_Pages/login/login.component';
import { NoAccessComponent } from './_Pages/no-access/no-access.component';
import { InputFieldComponent } from './_Pages/input-field/input-field.component';
import { ContactFormComponent } from './_Pages/contact-form/contact-form.component';
import { CreateCourseComponent } from './_Pages/create-course/create-course.component';
import { NewCourseFormComponent } from './_Pages/new-course-form/new-course-form.component';
import { FormBuilderComponent } from './_Pages/form-builder/form-builder.component';
import { ChangePasswordComponent } from './_Pages/change-password/change-password.component';
import { SignupFormComponent } from './_Components/signup-form/signup-form.component';
import { CourseComponent } from './_Components/course/course.component';
import { AuthorsComponent } from './_Components/authors/authors.component';
import { FavoriteComponent } from './_Components/favorite/favorite.component';
import { PanelComponent } from './_Components/panel/panel.component';
import { LikebuttonComponent } from './_Components/likebutton/likebutton.component';
import { SafeTraversalOperatorComponent } from './_Components/safe-traversal-operator/safe-traversal-operator.component';
import { ZippyComponent } from './_Components/zippy/zippy.component';
import { NavbarComponent } from './_Components/navbar/navbar.component';
import { GithubPofileComponent } from './_Components/github-pofile/github-pofile.component';
import { ArchiveComponent } from './_Pages/archive/archive.component';
import { AdminComponent } from './_Pages/admin/admin.component';
import { AppErrorHandler } from './_Components/common/app-error-handler';
import { UnsortedTestComponentsComponent } from './_Pages/unsorted-test-components/unsorted-test-components.component';
import { CoursesService } from './_Services/courses.service';
import { OrderService } from './_Services/order.service';
import { AuthService } from './_Services/auth.service';
import { AuthorsService } from './_Services/authors.service';
import { PostService } from './_Services/post.service';
import { GitFollowingService } from './_Services/git-following.service';
import { AuthGuard } from './_Services/auth-guard.service';
import { AdminAuthGuard } from './_Services/admin-auth-guard.service';
import { HttpConfigInterceptor } from './_Interseptor/httpconfig.interceptor';
import { AngularMeterialComponent } from './_Pages/angular-meterial/angular-meterial.component';
import { EditCourseComponent} from './edit-course/edit-course.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { TodoListComponent } from './tasking/todo-list/todo-list.component';
import { TodoDashboardComponent } from './tasking/todo-dashboard/todo-dashboard.component';
import { ReduxExampleComponent } from './countingRedux/redux-example/redux-example.component';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { routes } from './app.routes';

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
    TestPanelsComponent,
    ArchiveComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
    AngularMeterialComponent,
    EditCourseComponent,
    ReduxExampleComponent,
    TodoListComponent,
    TodoDashboardComponent, 
  ],
  entryComponents:[
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    NgReduxModule,      
    RouterModule.forRoot(routes)
  ],
  providers: [
    CoursesService,
    OrderService,
    AuthService,
    AuthorsService,
    PostService,
    GitFollowingService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
 }
