import { getDefaultPageComponent, type KcPage } from '@keycloakify/angular/login';
import { TemplateComponent } from '@keycloakify/angular/login/template';
import type { ClassKey } from 'keycloakify/login';
import { UserProfileFormFieldsComponent } from './components/user-profile-form-fields/user-profile-form-fields.component';
import type { KcContext } from './KcContext';

const classes = {} satisfies Partial<Record<ClassKey, string>>;
const doUseDefaultCss = true;
const doMakeUserConfirmPassword = true;

export async function getKcPage(pageId: KcContext['pageId']): Promise<KcPage> {
    switch (pageId) {
        case 'login.ftl':
            return {
                PageComponent: (await import('./pages/login/login.component'))
                    .LoginComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'register.ftl':
            return {
                PageComponent: (await import('./pages/register/register.component'))
                    .RegisterComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'terms.ftl':
            return {
                PageComponent: (await import('./pages/terms/terms.component'))
                    .TermsComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'info.ftl':
            return {
                PageComponent: (await import('./pages/info/info.component'))
                    .InfoComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'error.ftl':
            return {
                PageComponent: (await import('./pages/error/error.component'))
                    .ErrorComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        default:
            return {
                PageComponent: await getDefaultPageComponent(pageId),
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
    }
}
