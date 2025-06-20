# starter-widget

This repo demonstrates a minimal setup for building an Artifact widget. It
reads a custom `profile.json` file checked against a Zod schema to display a
personalized welcome.

## Development

```bash
npm run dev
```

## Building

```bash
npm run build
```

Load `dist/index.html` in an `ArtifactFrameHolder` to embed the widget inside
another application.

### Data shape

The profile data is defined in `src/types/account.ts`:

```ts
export const accountDataSchema = z.object({
  user: z.object({
    name: z.string()
  })
})
```

The widget reads this file to display the user's name at runtime.
