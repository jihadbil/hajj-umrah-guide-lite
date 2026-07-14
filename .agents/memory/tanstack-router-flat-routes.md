---
    name: TanStack Router flat dynamic detail routes
    description: How to add a dynamic detail route (e.g. /hotels/$id) as a sibling of an existing list route file in TanStack Router's file-based flat routing, without it silently rendering the parent's content.
    ---

    When a flat route file `hotels.tsx` already exists (mapping to `/hotels`), adding `hotels.$hotelId.tsx` does NOT create an independent top-level route at `/hotels/$hotelId`. Instead, TanStack Router's dot-segment convention treats `hotels.tsx` as the parent layout route, and `hotels.$hotelId.tsx` becomes its nested child requiring an `<Outlet />` in the parent to render.

    **Why:** Since `hotels.tsx` has no `<Outlet />`, navigating to `/hotels/1` matched the route tree correctly (confirmed via routeTree.gen.ts) but visually just rendered the parent list page in full — no error, no console warning, silently wrong. Easy to mistake for a data/props bug when it's actually a routing nesting issue.

    **How to apply:** To make a dynamic detail page a top-level sibling (not nested under the list page), name the file with a trailing underscore before the dot: `hotels_.$hotelId.tsx` → resolves to path `/hotels/$hotelId` without nesting under `hotels.tsx`. Verify by checking routeTree.gen.ts shows the route id as `/hotels_/$hotelId` (not nested), and by screenshotting the actual dynamic URL — don't just trust tsc/route-tree generation succeeding silently.
    