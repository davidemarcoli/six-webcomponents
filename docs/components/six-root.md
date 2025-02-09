# Root

Six root gives you a [basic layout](<https://en.wikipedia.org/wiki/Holy_grail_(web_design)>) skeleton.


## Basic Layout with all elements

`six-root` provides a basic application layout.

You can remove the content padding by adding `padded="false"` to `six-root`.

You can provide a stage indicator by adding `stage="DEV"` to `six-root` as well as provide version information by adding `version="DEV-1.1.2"`to `six-root`. Providing nothing or `PROD` will disable stage indication

<docs-demo-six-root-0></docs-demo-six-root-0>

```html
<div class="six-root-wrapper">
  <six-root stage="PROD" style="height: 100%" version="PROD-1.2.3">
    <six-header shift-content="true" slot="header">
      
      <six-search-field slot="search-field">
        <div></div>
      </six-search-field>
      
      <six-icon-button name="notifications_none" slot="notifications">
        <six-badge pill type="danger">99</six-badge>
      </six-icon-button>
      
      <six-menu slot="app-switcher-menu">
        <six-menu-item>LongAppName1</six-menu-item>
        <six-menu-item>LongAppName2</six-menu-item>
        <six-menu-item>VeryVeryLongApp3</six-menu-item>
        <six-menu-item>App4</six-menu-item>
      </six-menu>
      
      <six-menu slot="profile-menu">
        <six-menu-item><b>Cat Kittens</b><br>cat.kitty.kittens@themCatsBeCool.com</six-menu-item>
        <six-menu-item>Change password</six-menu-item>
        <six-menu-item>Logout</six-menu-item>
      </six-menu>
      
      <six-avatar                 image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        slot="profile-avatar"
      >
      </six-avatar>
    </six-header>

    <six-sidebar open position="left" slot="left-sidebar">
      <six-sidebar-item-group icon="description" name="Upload">
        <six-sidebar-item>Data</six-sidebar-item>
        <six-sidebar-item>History</six-sidebar-item>
        <six-sidebar-item-group icon="settings" name="Settings">
          <six-sidebar-item>Data</six-sidebar-item>
          <six-sidebar-item>History</six-sidebar-item>
        </six-sidebar-item-group>
      </six-sidebar-item-group>
      <six-sidebar-item-group icon="task" name="Tasks">
        <six-sidebar-item>Open</six-sidebar-item>
        <six-sidebar-item>Closed</six-sidebar-item>
      </six-sidebar-item-group>
      <six-sidebar-item-group icon="ac_unit" name="Transactions"></six-sidebar-item-group>
      <six-sidebar-item-group icon="settings" name="Reclaims"></six-sidebar-item-group>
      <six-sidebar-item-group icon="description" name="Upload">
        <six-sidebar-item>Data</six-sidebar-item>
        <six-sidebar-item>History</six-sidebar-item>
        <six-sidebar-item-group icon="settings" name="Settings">
          <six-sidebar-item>Data</six-sidebar-item>
          <six-sidebar-item>History</six-sidebar-item>
        </six-sidebar-item-group>
      </six-sidebar-item-group>
      <six-sidebar-item-group icon="description" name="Upload">
        <six-sidebar-item>Data</six-sidebar-item>
        <six-sidebar-item>History</six-sidebar-item>
        <six-sidebar-item-group icon="settings" name="Settings">
          <six-sidebar-item>Data</six-sidebar-item>
          <six-sidebar-item>History</six-sidebar-item>
        </six-sidebar-item-group>
      </six-sidebar-item-group>
      <six-sidebar-item-group icon="task" name="Tasks">
        <six-sidebar-item>Open</six-sidebar-item>
        <six-sidebar-item>Closed</six-sidebar-item>
      </six-sidebar-item-group>
      <six-sidebar-item-group icon="ac_unit" name="Transactions"></six-sidebar-item-group>
      <six-sidebar-item-group icon="settings" name="Reclaims"></six-sidebar-item-group>
      <six-sidebar-item-group icon="description" name="Upload">
        <six-sidebar-item>Data</six-sidebar-item>
        <six-sidebar-item>History</six-sidebar-item>
        <six-sidebar-item-group icon="settings" name="Settings">
          <six-sidebar-item>Data</six-sidebar-item>
          <six-sidebar-item>History</six-sidebar-item>
        </six-sidebar-item-group>
      </six-sidebar-item-group>
    </six-sidebar>

    <div slot="main">
      <p>Content</p>
      <div>
        <six-button id="show-tasks">Show some tasks...</six-button>
        <six-button id="toggle-text">Toggle some text...</six-button>
      </div>
      <section id="text-section">
        <h1>Lorem ipsum</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi facere facilis incidunt quia veniam?
        Accusamus aperiam assumenda, at aut blanditiis culpa cupiditate debitis, deleniti dolores earum
        exercitationem facere facilis iste labore laborum nemo obcaecati quae qui recusandae reprehenderit
        repudiandae sapiente sunt ullam velit vero vitae voluptas! Aperiam asperiores aspernatur dolore eveniet,
        exercitationem fugiat illum in iusto mollitia numquam obcaecati provident quas quasi tempore voluptas!
        Esse et ex libero. Cum deserunt dicta dolor exercitationem quod quos.
      </section>
    </div>

    <six-sidebar position="right" slot="right-sidebar">
      <six-card>
        <h3>Task</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
          delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
          voluptas.
        </p>
      </six-card>
      <six-card>
        <h3>Task</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
          delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
          voluptas.
        </p>
      </six-card>
      <six-card>
        <h3>Task</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
          delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
          voluptas.
        </p>
      </six-card>
      <six-card>
        <h3>Task</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
          delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
          voluptas.
        </p>
      </six-card>
      <six-card>
        <h3>Task</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
          delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
          voluptas.
        </p>
      </six-card>
      <six-card>
        <h3>Task</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
          delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
          voluptas.
        </p>
      </six-card>
      <six-card>
        <h3>Task</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
          delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
          voluptas.
        </p>
      </six-card>
      <six-card>
        <h3>Task</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
          delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
          voluptas.
        </p>
      </six-card>
      <six-card>
        <h3>Task</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
          delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
          voluptas.
        </p>
      </six-card>
      <six-card>
        <h3>Task</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
          delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
          voluptas.
        </p>
      </six-card>
    </six-sidebar>

    <six-footer slot="footer">Copyright © 2021-present SIX Group</six-footer>
  </six-root>
</div>

<six-drawer class="drawer-overview" label="Drawer">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <six-button slot="footer">Close</six-button>
</six-drawer>

<script type="module">
  (() => {
    const getElements = (e) =>
      Object.entries(e).reduce(
        (e, [r, t]) => ({
          ...e,
          [r]: Array.isArray(t)
            ? t.flatMap((s) => Array.from(document.querySelectorAll(s)))
            : document.querySelector(t),
        }),
        {}
      );

    const Select = getElements({
      header: 'six-header',
      leftSidebar: 'six-sidebar[slot="left-sidebar"]',
      tasksButton: '#show-tasks',
      textButton: '#toggle-text',
      textSection: '#text-section',
      rightSidebar: 'six-sidebar[slot="right-sidebar"]',
      drawer: 'six-drawer',
      cards: ['six-sidebar[slot="right-sidebar"] six-card'],
    });

    Select.header.addEventListener('six-header-hamburger-menu-clicked', () =>
      Select.leftSidebar.toggleAttribute('open')
    );

    Select.leftSidebar.addEventListener('six-sidebar-hide', () => (Select.header.openHamburgerMenu = false));

    Select.leftSidebar.addEventListener('six-sidebar-show', () => (Select.header.openHamburgerMenu = true));

    Select.tasksButton.addEventListener('click', () => Select.rightSidebar.toggleAttribute('open'));

    Select.cards.forEach((card) => {
      card.addEventListener('click', () => Select.drawer.toggleAttribute('open'));
    });

    Select.textButton.addEventListener('click', () => {
      Select.textSection.style.display = Select.textSection.style.display === 'none' ? 'block' : 'none';
    });
  })();
</script>
<style>
  .six-root-wrapper {
    height: 78vh;
    width: 100%;
    border: solid 1rem rgba(0, 0, 0, 0.2);
  }

  .six-root-wrapper::after {
    content: '';
    height: 5rem;
  }
</style>
```



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                    | Type                                                        | Default |
| ------------ | ------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------- | ------- |
| `breakpoint` | `breakpoint` | Breakpoint for smaller screens when the right sidebar is collapsed by default. | `number`                                                    | `1024`  |
| `padded`     | `padded`     | Defines whether the content section should be padded                           | `boolean`                                                   | `true`  |
| `stage`      | `stage`      | Defines the stage of the application                                           | `"ACCEPTANCE" \| "DEV" \| "ETU" \| "ITU" \| "PROD" \| null` | `null`  |
| `version`    | `version`    | Defines the version of the application                                         | `string`                                                    | `''`    |


## Events

| Event                | Description                           | Type                                   |
| -------------------- | ------------------------------------- | -------------------------------------- |
| `six-root-collapsed` | Emitted when display size is updated. | `CustomEvent<SixRootCollapsedPayload>` |


## Slots

| Slot              | Description                                     |
| ----------------- | ----------------------------------------------- |
| `"footer"`        | Used to define the footer component.            |
| `"header"`        | Used to define the header component.            |
| `"left-sidebar"`  | Used to define the sidebar on the left side.    |
| `"main"`          | Used to define the components in the main area. |
| `"right-sidebar"` | Used to define the sidebar on the right side.   |


## Shadow Parts

| Part              | Description |
| ----------------- | ----------- |
| `"container"`     |             |
| `"header"`        |             |
| `"left-sidebar"`  |             |
| `"main"`          |             |
| `"right-sidebar"` |             |


## Dependencies

### Depends on

- [six-stage-indicator](six-stage-indicator.html)
- [set-attributes](../wrappers/set-attributes.html)

### Graph
```mermaid
graph TD;
  six-root --> six-stage-indicator
  six-root --> set-attributes
  six-stage-indicator --> six-icon
  style six-root fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Copyright © 2021-present SIX-Group
