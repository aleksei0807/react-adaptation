# React Adaptation

Mixin that simplify adaptation of your react components.

It perfoms checks in one of two ways:

- it checks that all first-level childs' widths together less or equals container's (`ref={ra.container}`) width.
- it checks that all components with `ref={ra.component}` widths together less or equals container's width.

Also it can perform addictive checks like `maxWidth` or `containerMaxWidth`.

- `maxWidth` parameter sets max document width when trigger is always `true`.
- `containerMaxWidth` parameter sets max container (`ref={ra.container}`) width when trigger is always `true`.

# Usage example

@todo
