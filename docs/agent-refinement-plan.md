# Agent Refinement Plan for Bespoke Mall Project

## Current State
9 agents: analyst, architect, dev, pm, quick-flow-solo-dev, sm, tea, tech-writer, ux-designer.

**Strengths**:
- Consistent activation (config load, menu-driven).
- Workflow integration (PRD, arch, dev-story).
- Specialized roles cover lifecycle.

**Suitability**: Excellent for greenfield (analysis → impl → test).

## Refinements Needed (Low Priority)
1. **Project Context Integration**:
   - All agents reference `**/project-context.md` - ensure updated with mall specifics.

2. **Menu Customization**:
   - PM: Add *bespoke-mall-prd exec custom-prd.
   - Architect: Add *kiosk-architecture.
   - Dev: Add Flutterwave story templates.

3. **Persona Tweaks**:
   - PM: "Specializes in revenue-focused platforms like mall apps."
   - UX: "Experienced in swipe UIs, maps, wallets."

4. **Handlers**:
   - Add handler for mall-specific data (e.g., data="projectInfo/*.md").

## Proposed Edits (Minimal)
- Append to each persona principles: "- Tailor to Bespoke Mall: ads, kiosks, Flutterwave."
- PM menu: <item cmd="*mall-sprint" workflow="custom-mall-sprint.yaml">Mall Sprint Planning</item>

Agents ready with minor tweaks. No major rewrite needed.

**Status**: Suitable as-is. Proceed to structure.