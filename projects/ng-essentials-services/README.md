# @12luckydev/ng-essentials-services

Collection of abstract classes to build 'smart' services for toasts, info and confirm dialogs. Makes it easier to use these features with internationalization

What do i mean by 'smart'?
Instead of providing e.g. for Toast the title and message body text, you can provide only the primary key for the translation.

So instead od this:

```javascript
this._toastService.success("COMMON.SUCCESS.TITLE", "COMMON.SUCCESS.MESSAGE");
```

You can use that:

```javascript
this._toastService.smartSuccess("COMMON.SUCCESS");
```

'Smart' method will add 'TITLE' and 'MESSAGE' (or any other values ​​depending on the configuration) to primary key and pass it to orginal success method.

## configuration

The passed parameters "title" and "message" in the 'toast', 'info' and 'confirm' subobjects are more important than those passed in the root of config object.

```javascript
import { NG_ESSENTIALS_SERVICES } from "@12luckydev/ng-essentials-services";

providers: [
  {
    provide: NG_ESSENTIALS_SERVICES,
    useFactory: () => ({
      title: "title",
      message: "message",
      toast: {
        success: "success",
        error: "error",
      },
    }),
  },
];
```

## Contexted service

Thanks to context services, calls with long keys do not take up half the screen :)

```javascript
class Component{
    private _toastService = inject(ToastService);

    showToast(){
        this._toastService.success("VERY.LONG.I18N.KEY.COMMON.SUCCESS.TITLE", "VERY.LONG.I18N.KEY.COMMON.SUCCESS.MESSAGE");
    }

    private _contextedToastService = inject(ToastService).withContext("VERY.LONG.I18N.KEY.COMMON");

    showContextedToast(){
        this._contextedToastService.success("SUCCESS.TITLE", "SUCCESS.MESSAGE");
        // or even shorter
        this._contextedToastService.smartSuccess("SUCCESS");

    }
}
```

## Toast service base

| Abstraction name        | Description                                                                                                      |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `ToastBaseMethods`      | Interface with methods definitions for toasts service                                                            |
| `ToastBase`             | Base class with smart methods implementation                                                                     |
| `ContextedToastService` | A class that contains the context and passes it to the base class. Useful for services that support translations |
| `ToastBaseWithContext`  | Base class with smart methods implementation and context support                                                 |

## Confirm Dialog service base

| Abstraction name                | Description                                                                                                      |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `ConfirmDialogBaseMethods`      | Interface with methods definitions for confirm dialog service                                                    |
| `ConfirmDialogBase`             | Base class with smart methods implementation                                                                     |
| `ContextedConfirmDialogService` | A class that contains the context and passes it to the base class. Useful for services that support translations |
| `ConfirmDialogBaseWithContext`  | Base class with smart methods implementation and context support                                                 |

## Info Dialog service base

| Abstraction name             | Description                                                                                                      |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `InfoDialogBaseMethods`      | Interface with methods definitions for info dialog service                                                       |
| `InfoDialogBase`             | Base class with smart methods implementation                                                                     |
| `ContextedInfoDialogService` | A class that contains the context and passes it to the base class. Useful for services that support translations |
| `InfoDialogBaseWithContext`  | Base class with smart methods implementation and context support                                                 |
