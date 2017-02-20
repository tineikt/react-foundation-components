# ⚠️ Temporary fork ⚠️

This is a temporary fork of `react-foundation-components`.

It was created in order to provide a workaround for an issue with one of its dependencies.

## Issue

`react-foundation-components` depends on `uncontrollable` in version `^4.0.3`.

`uncontrollable` in version `4.0.3` requires `react/lib/ReactUpdates` which is no longer available in `react` version `>= 0.14.0`. It has since been moved to `react-dom/lib/ReactUpdates`.

This issue has been fixed in `uncontrollable` but the fix has not been released as a new npm version yet.

## Workaround

The only difference between this fork and the original is that this fork depends on a specific commit of `uncontrollable` which contains the fix.
