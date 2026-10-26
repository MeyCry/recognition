# Recognition fixtures

Static pages that the Aura browser extension and its autotests use to exercise form recognition.

## Language

**Test page**:
A single URL serving a form fixture.
_Avoid_: screen, route, fixture page

**Test case**:
One recognition scenario. It consists of an ordered list of Test pages, and its first Test page is the Entry page.
_Avoid_: scenario, flow, case page

**Entry page**:
The Test page where a Test case starts, and the only one the catalog links to. The other Test pages are reached from the form on the previous page or embedded in a frame.
_Avoid_: first page, landing page

**Group**:
A titled, numbered set of related Test cases in the catalog.
_Avoid_: category, section, scenario group

**Catalog**:
The ordered list of Groups, shown at `/`.
_Avoid_: index, home, menu
