# NgEssentials

Collection of abstract classes to build 'smart' services for toasts, info and confirm dialogs.

## Toast service base

| Abstraction name        | Description                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `ToastBaseMethods`      | Interface with methods definitions                                                                                |
| `ToastBase`             | Base class with smart methods implementation                                                                      |
| `ContextedToastService` | A class that contains the context and passes it to the base class. Useful for services that support translations. |
| `ToastBaseWithContext`  | Base class with smart methods implementation and context support                                                  |
