import { Component, Element, h, Prop, State } from '@stencil/core';
import { hasSlot } from '../../utils/slot';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the nested side bar [group] items.
 */

@Component({
  tag: 'six-sidebar-item-group',
  styleUrl: 'six-sidebar-item-group.scss',
  shadow: true,
})
export class SixSidebarItemGroup {
  @Element() readonly host: HTMLSixSidebarItemGroupElement;

  @State() hasItems = false;

  /** Title of item group */
  @Prop() name = '';

  /** Icon of the group */
  @Prop() icon = '';

  /** A unique value to store in the sidebar item of the group label. This can be used as a way to identify sidebar items when selected. */
  @Prop({ reflect: true }) value = '';

  @Prop({ reflect: true }) open = false;

  /** Custom summary icon name. */
  @Prop() summaryIcon: string;

  connectedCallback() {
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  componentWillLoad() {
    this.handleSlotChange();
  }

  handleSlotChange() {
    this.hasItems = hasSlot(this.host);
  }

  isSubgroup() {
    return !!this.host.parentElement.closest('six-sidebar-item-group');
  }

  @State() summaryIconHasContent: boolean;

  provideSlot = (name: string) => {
    if (this.summaryIconHasContent) {
      return (
        <div slot={name}>
          <slot name={name}></slot>
        </div>
      );
    }

    return (
      <slot
        name={name}
        onSlotchange={() => {
          this.summaryIconHasContent =
            this.host.shadowRoot.querySelector<HTMLSlotElement>(`slot[name="${name}"]`).assignedNodes().length > 0;
        }}
      ></slot>
    );
  };

  render() {
    return (
      <six-details
        class={{
          'six-sidebar-item-group--childless': !this.hasItems,
          'six-sidebar-item-group--subgroup': this.isSubgroup(),
        }}
        inline={true}
        open={this.open}
        summary-icon={this.summaryIcon}
        hasContent={this.hasItems}
      >
        <div slot="summary">
          <div class="six-sidebar-details__header">
            {this.icon && <six-icon class="six-sidebar-details__header-icon">{this.icon}</six-icon>}
            {this.name}
          </div>
        </div>
        {this.provideSlot('summary-icon')}
        <slot />
      </six-details>
    );
  }
}
