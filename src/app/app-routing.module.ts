import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AffiliatesettingComponent } from './affiliatesetting/affiliatesetting.component';
import { HomeComponent } from './home/home.component';
import { ActivewpgroupComponent } from './activewpgroup/activewpgroup.component';
import { BitlyComponent } from './bitly/bitly.component';
import { BitlyhelpComponent } from './bitlyhelp/bitlyhelp.component';
import { BitlytokenComponent } from './bitlytoken/bitlytoken.component';
import { BottokenComponent } from './bottoken/bottoken.component';
import { ConvertedComponent } from './converted/converted.component';
import { FillreplacestringComponent } from './fillreplacestring/fillreplacestring.component';
import { FillreplaceurlComponent } from './fillreplaceurl/fillreplaceurl.component';
import { FindwpgroupComponent } from './findwpgroup/findwpgroup.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutDarkNavComponent } from './layout-dark-nav/layout-dark-nav.component';
import { LoginComponent } from './login/login.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { OurplansComponent } from './ourplans/ourplans.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReplacestringComponent } from './replacestring/replacestring.component';
import { ReplaceurlComponent } from './replaceurl/replaceurl.component';
import { TelegramComponent } from './telegram/telegram.component';
import { TelegrambotComponent } from './telegrambot/telegrambot.component';
import { TelegramhelpComponent } from './telegramhelp/telegramhelp.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WhatsapphelpComponent } from './whatsapphelp/whatsapphelp.component';
import { WhatsapploginComponent } from './whatsapplogin/whatsapplogin.component';
import { YoururlshortnerComponent } from './yoururlshortner/yoururlshortner.component';
import { HeaderComponent } from './header/header.component';





const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'activewpgroup', component:ActivewpgroupComponent},
  {path:'asetting', component:AffiliatesettingComponent},
  {path:'bitly', component:BitlyComponent},
  {path:'bitlyhelp', component:BitlyhelpComponent},
  {path:'bitlytoken', component:BitlytokenComponent},
  {path:'bottoken' , component:BottokenComponent},
  {path:'converted', component:ConvertedComponent},
  {path:'fillreplcestring', component:FillreplacestringComponent},
  {path:'fillreplaceurl' , component:FillreplaceurlComponent},
  {path:'findwpgroup' , component:FindwpgroupComponent},
  {path:'footer' , component:FooterComponent},
  {path:'header', component:HeaderComponent},
  {path:'home', component:HomeComponent},
  {path:'layout' , component:LayoutDarkNavComponent},
  {path:'login', component:LoginComponent},
  {path:'makepayment' , component:MakepaymentComponent},
  {path:'ourplans', component:OurplansComponent},
  {path:'payment', component:PaymentComponent},
  {path:'profile', component:ProfileComponent},
  {path:'progress', component:ProgressComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'replacestring', component:ReplacestringComponent},
  {path:'replaceurl', component:ReplaceurlComponent},
  {path:'telegram', component:TelegramComponent},
  {path:'telegrambot', component:TelegrambotComponent},
  {path:'telegramhelp', component:TelegramhelpComponent},
  {path:'userprofile', component:UserprofileComponent},
  {path:'whatsapphelp', component:WhatsapphelpComponent},
  {path:'whatsapplogin', component:WhatsapploginComponent},
  {path:'yoururlshorter', component:YoururlshortnerComponent}
  
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
