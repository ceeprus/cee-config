# TF2

-windowed -noborder -novid -nojoy -nosteamcontroller -nohltv -particles 1 -precachefontchars

## Layout

- `custom/ahud-cc-master/` → `tf/custom/ahud-cc-master/`
- `cfg/overrides/` → `tf/cfg/overrides/` — user cfg lives here so mastercomfig's VPK `autoexec.cfg` can bootstrap.
  Never put an `autoexec.cfg` loose in `tf/cfg/` or inside a HUD's `cfg/` folder: it shadows mastercomfig's and the
  preset/modules silently never load (ahud's shipped copy is renamed `.disabled-shadowed-mastercomfig` for this reason).
